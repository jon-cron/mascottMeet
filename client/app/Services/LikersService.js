import { server } from "./AxiosService.js"

class LikersService{
  async likePost(postId){
    // console.log(postId)
    const res = await server.post('api/likers', { postId })
    console.log(res.data)
    const likedPost = appState.posts.find(p => p.id == postId)
 
   likedPost.likes++ 
 
   appState.emit('posts')
  }
}

export const likersService = new LikersService()