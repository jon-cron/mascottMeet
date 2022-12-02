import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";




export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getPosts)
      .get('/:id', this.getPostById)
      // TODO GET POST BY ID (LATER!)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPost)
  }


  async getPosts(req, res, next) {
    try {
      const posts = await postsService.getPosts()
      return res.send(posts)
    } catch (error) {
      next(error)
    }
  }
  async getPostById(req, res, next) {
    try {
      const post = await postsService.getPostById(req.params.id)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async createPost(req, res, next) {
    try {
      req.body.posterId = req.userInfo.id
      const post = await postsService.createPost(req.body)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }
}