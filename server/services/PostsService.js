import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";




class PostsService {
  async getPosts() {
    const posts = await dbContext.Posts.find().populate('postedBy likeCount comments')
    return posts
  }

  async getPostById(id) {
    const post = await dbContext.Posts.findById(id).populate('postedBy likeCount comments')
    if (!post) { throw new BadRequest('can not locate post') }
    return post
  }

  async createPost(postData) {
    const newPost = await dbContext.Posts.create(postData)
    await newPost.populate('postedBy likeCount comments')
    return newPost
  }
  async remove(id) {
    const post = await dbContext.Posts.findById(id)
    if (!post) throw new BadRequest('no post by this id')
    await post.remove()
    return `deleted ${post.name}`
  }
}


export const postsService = new PostsService();