import { dbContext } from "../db/DbContext.js"


class CommentsService {
    async getAll(id) {
        const comments = await dbContext.Comments.find({ postId: id }).populate('commenter', 'name picture')
        return comments
    }
    async getCommentsByPost(id) {
        const comment = await dbContext.Comments.find({ postId: id }).populate('commenter', 'name picture')
        return comment
    }
    async createComment(body) {
        const comment = await dbContext.Comments.create(body)
        return comment
    }
}


export const commentsService = new CommentsService()