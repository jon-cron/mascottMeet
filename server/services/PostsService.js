import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";




class PostsService {
  async getPosts() {
    const posts = await dbContext.Posts.find().populate('postedBy')
    return posts
  }

  async getPostById(id) {
    const post = await dbContext.Posts.findById(id).populate('postedBy')
    if (!post) { throw new BadRequest('can not locate post') }
    return post
  }

  async createPost(postData) {
    const newPost = await dbContext.Posts.create(postData)
    return newPost

  }
}


export const postsService = new PostsService();