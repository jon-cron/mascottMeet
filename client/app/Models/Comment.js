export class Comment {
  constructor(data) {
    this.commentMessage = data.commentMessage
    this.commenterId = data.comments.commenterId
    this.postId = data.comments.postId
  }
}