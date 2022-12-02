import { appState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { server } from "./AxiosService.js"

class PostsService{

 async getPost(){
   const res = await server.get('api/posts')
    appState.posts = res.data.map(p => new Post(p))
  // console.log(res.data)
 }
 async getOnePost(id){
  console.log(id)
 }
 async create(formData){
  let res = await server.post('api/posts', formData)
  appState.posts.push(new Post(res.data))
  appState.emit('posts')
 }
 

}

export const postsService = new PostsService()