import BaseController from "../utils/BaseController.js";

import { Auth0Provider } from "@bcwdev/auth0provider";
import { likersService } from "../services/LikersService.js";








export class LikersController extends BaseController {
  constructor() {
    super('api/likers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.likePost)
  }
  async likePost(req, res, next) {
    try {
      req.body.likerId = req.userInfo.id
      const liker = await likersService.likePost(req.body)
      return res.send(liker)
    } catch (error) {
      next(error)
    }
  }
}