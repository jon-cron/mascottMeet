import { Pop } from "../Utils/Pop.js"
import { likersService } from "../Services/likersService.js"


export class LikersController{
  constructor(){
    console.log('LIkers controller connected')
  }
  async likePost(postId){
    try {
      await likersService.likePost(postId)
    } catch (error) {
      Pop.error(error.message)
    }
  }
}