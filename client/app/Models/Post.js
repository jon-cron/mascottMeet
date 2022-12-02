export class Post {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.img = data.img
    this.posterId = data.posterId
    this.likeCount = data.likeCount
    this.username = data.postedBy.name
    this.picture = data.postedBy.picture
  }

  get PostTemplate() {
    return `
    <section class="row m-2 p-1 elevation-1 bg-light">
    <div class="col-3 selectable" data-toggle="modal" data-target="#exampleModalCenter" onclick="app.postsController.getOnePost('${this.id}')" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight">
      <img class="img-fluid" src="${this.img}" alt="">
    </div>
    <div class="col-6">
    <div>
      <h1>${this.name}</h1>
      <h4>Likes:${this.likeCount}</h4>
      </div>
      <div class="mt-5">
      <h4>Posted By:</h4>
      <div class="d-flex align-items-center">
      <img class="poster-img m-1" src="${this.picture}" alt="">
      <h6>${this.username}</h6>
      </div>
      </div>
    </div>
    <div class="col-3 d-flex justify-content-center align-items-center">
      <button class="btn text-center" onclick="app.likersController.likePost('${this.id}')"><h1><i class="mdi mdi-heart"></i></h1></button>
    </div>
  </section>`
  }
  get ActivePostTemplate() {
    return `
    <div class="col-12"> <button type="button" class="btn-close text-reset justify-content-end"
            data-bs-dismiss="offcanvas" aria-label="Close"></button>
          <h5 id="offcanvasRightLabel" class="pt-3">${this.name}</h5>
        </div>

        <div class="offcanvas-body">
          <p class="fs-6 card p-2 px-3">${this.description}.</p>
          <p class="my-2"> Posted By:  ${this.username}<img
              src="${this.picture}"
              class="poster-img ms-2">
          </p>
          `
  }
}