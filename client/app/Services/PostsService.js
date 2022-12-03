import { appState } from "../AppState.js"
import { Post } from "../Models/Post.js"
import { server } from "./AxiosService.js"
import { commentsService } from "./CommentsService.js"

class PostsService {

  async getPost() {
    const res = await server.get('api/posts')
    appState.posts = res.data.map(p => new Post(p))
    // console.log(res.data)
  }
  async getOnePost(id) {
    let foundPost = appState.posts.find(p => p.id == id)
    appState.activePost = foundPost
    console.log(appState.activePost)
    appState.comments = appState.activePost.comments
    console.log(appState.comments)
  }
  async create(formData) {
    let res = await server.post('api/posts', formData)
    console.log(res.data)
    appState.posts.push(new Post(res.data))
    appState.emit('posts')
  }

  // async getComments() {
  //   let comment = await commnetsService.getComments()
  //   console.log(comment);
  //   return comment

  // }


}

export const postsService = new PostsService()