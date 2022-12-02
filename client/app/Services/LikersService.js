
class LikersService{
  async likePost(postId){
    const res = await server.post('api/pos', { postId })
    const likedPost = appState.posts.find(p => p.id == postId)
 
   likedPost.likes++ 
 
   appState.emit('posts')
  }
}

export const likersService = new LikersService()