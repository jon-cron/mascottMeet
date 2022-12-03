export class Comment {
  constructor(data) {
    this.comments = data.comments
    this.commentMessage = data.commentMessage
    this.commenterId = data.commenterId
    this.postId = data.postId
  }



  get commentTemplate() {
    return `
    <p>'${this.commentMessage}'</p>
`
  }
}