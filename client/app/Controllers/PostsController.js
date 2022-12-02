import { appState } from "../AppState.js"
import { postsService } from "../Services/PostsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"




function _drawPosts() {
  let template = ''
  appState.posts.forEach(p => template += p.PostTemplate)
  setHTML('posts', template)

}
function _drawActivePost(postId) {
  setHTML('postGoesHere', appState.activePost.ActivePostTemplate)
}

export class PostsController {
  constructor() {
    this.getPost()
    appState.on('posts', _drawPosts)
    appState.on('activePost', _drawActivePost)
  }


  async getPost() {
    try {
      await postsService.getPost()

    } catch (error) {
      Pop.error(error.message)
    }
  }
  async getOnePost(id) {
    try {
      await postsService.getOnePost(id)
    } catch (error) {
      Pop.error(error.message)
    }
  }
  async create() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      await postsService.create(formData)
    } catch (error) {
      Pop.error(error.message)
    }
  }

}