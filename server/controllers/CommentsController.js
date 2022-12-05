import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";
import { Logger } from "sass";
import { logger } from "../utils/Logger.js";
import { commentsService } from "../services/CommentService.js";
export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .get('/:id', this.getAll)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('/:postId', this.createComment)

    }
    async getAll(req, res, next) {
        try {
            const comments = await commentsService.getAll(req.params.id)
            return res.send(comments)
        } catch (error) {
            next(error)
        }
    }
    async createComment(req, res, next) {
        try {
            req.body.commenterId = req.userInfo.id
            req.body.postId = req.params.postId
            const comment = await commentsService.createComment(req.body)
            return res.send(comment)
        } catch (error) {
            next(error)
        }
    }


}