import { appState } from "../AppState.js";
import { server } from "./AxiosService.js";




class CommentsService {



    async getComments() {
        let postid = appState.activePost.id
        const res = await server.get(`/api/comments/${postid}`)
        appState.comments = res.data
    }
}


export const commentsService = new CommentsService();