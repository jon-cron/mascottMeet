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
        this.comments = data.comments
    }

    get PostTemplate() {
        return `
    <section class="row m-2 p-1 elevation-1 bg-light">
    <div class="col-3 selectable" data-toggle="modal" data-target="#exampleModalCenter" onclick="app.postsController.getOnePost('${this.id}')" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight">
      <img class="img-fluid post-img" src="${this.img}" alt="">
    </div>
    <div class="col-9">
    <div>
    <section class="row d-flex justify-content-between"
      <h1></h1><h1 class="col-6 text-nowrap">${this.name}</h1> <h2 class="col-2"><i class="mdi mdi-delete text-danger col-2" onclick="app.postsController.removePost('${this.id}')"></i></h2>
      <h1 class="col-5 mt-3"><i class="mdi mdi-heart" onclick="app.likersController.likePost('${this.id}')"></i></h1>
      </section>
      <h4>Likes: ${this.likeCount}</h4>
      <div class="mt-3">
      <div class="d-flex align-items-center justify-content-end">
      <img class="poster-img m-1" src="${this.picture}" alt="">
      <h6>${this.username}</h6>
      </div>
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