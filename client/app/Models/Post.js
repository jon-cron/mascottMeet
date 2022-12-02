export class Post{
  constructor(data){
    this.name = data.name,
    this. description = data.description
    this.img = data.img
    this.postId = data.postId
    this.likes= data.likes

  }

  get PostTemplate(){
    return`
    <section class="row m-2 p-1 elevation-1">
    <div class="col-3 selectable" onclick="app.postsController.getPost(${this.postId})">
      <img class="img-fluid" src="${this.img}" alt="">
    </div>
    <div class="col-6">
      <h1>${this.name} like ${this.likes}</h1>
      <p>${this.description}</p>
    </div>
    <div class="col-3 d-flex justify-content-center align-items-center">
      <button class="btn text-center" onclick="app.likersController.likePost('${this.postId})"><h1><i class="mdi mdi-heart"></i></h1></button>
    </div>
  </section>`
  }
}