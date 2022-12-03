import { appState } from "../AppState.js";
import { server } from "./AxiosService.js";




class CommentsService {



  async getComments() {
    let postid = appState.activePost.id
    const res = await server.get(`/api/posts/${postid}/comments`)
    console.log(res.data)
  }
}


export const commentsService = new CommentsService();