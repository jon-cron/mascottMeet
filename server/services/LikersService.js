import { dbContext } from "../db/DbContext.js"




export class LikersService {
  async likePost(body) {
    const like = await dbContext.Likers.create(body)
    await like.populate('liker', 'name picture')
    return like
  }

}


export const likersService = new LikersService()