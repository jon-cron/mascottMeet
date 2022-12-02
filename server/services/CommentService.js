import { dbContext } from "../db/DbContext.js"


class CommentsService{
  async getAll(){
    const comments = await dbContext.Comments.find()
    return comments
  }
  async createComment(body){
    const comment = await dbContext.Comments.create(body)
    return comment
  }
}


 export const commentsService = new CommentsService()