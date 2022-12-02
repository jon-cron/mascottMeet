import { appState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { server } from "./AxiosService.js"

class PostsService{

 async getPost(){
   const res = await server.get('api/posts')
    appState.posts = res.data.map(p => new Post(p))
  console.log(res.data)
 }
 

}

export const postsService = new PostsService()