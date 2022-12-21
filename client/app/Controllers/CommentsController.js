import { appState } from "../AppState.js";
import { commentsService } from "../Services/CommentsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawComments() {
    let template = ''
    for (let i = 0; i < appState.comments.length; i++) {
        template += appState.comments[i].commentMessage
    }
    setHTML('comments', template)
}



export class CommentsController {
    constructor() {
        appState.on('comments', _drawComments)
        _drawComments()
        appState.on('activePost', this.getComments)
    }



    async getComments() {
        try {
            await commentsService.getComments()
        } catch (error) {
            Pop.error(error.message)
        }
    }
}
