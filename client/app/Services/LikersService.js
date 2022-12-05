import { appState } from "../AppState.js"
import { server } from "./AxiosService.js"

class LikersService {
    async likePost(postId) {
        // console.log(postId)
        const res = await server.post('api/likers', { postId })
        console.log(res.data)
        const likedPostIndex = appState.posts.findIndex(p => p.id == postId)
        debugger
        appState.posts[likedPostIndex].likeCount++
        appState.emit('posts')
    }
}

export const likersService = new LikersService()