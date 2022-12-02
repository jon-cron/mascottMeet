import { appState } from "../AppState.js"
import { postsService } from "../Services/PostsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"




function _drawPosts(){
  let template = ''
  appState.posts.forEach(p => template += p.PostTemplate)
  setHTML('posts', template)
  
}
function _drawActivePost(){
  
}

export class PostsController{
  constructor(){
   this.getPost() 
    appState.on('posts', _drawPosts)
  }

  
 async getPost(postId){
  try {
    await postsService.getPost(postId)
  } catch (error) {
    Pop.error(error.message)
  }
  }
 
}