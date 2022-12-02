export class Post{
  constructor(data){
    this.id = data.id
    this.title = data.name
    this.description = data.description
    this.img = data.img
    this.posterId = data.posterId
    this.likeCount = data.likeCount
    this.name = data.postedBy.name
    this.picture = data.postedBy.picture

  }

  get PostTemplate(){
    return`
    <section class="row m-2 p-1 elevation-1 bg-light">
    <div class="col-3 selectable" data-toggle="modal" data-target="#exampleModalCenter" onclick="app.postsController.getOnePost('${this.id}')">
      <img class="img-fluid" src="${this.img}" alt="">
    </div>
    <div class="col-6">
    <div>
      <h1>${this.title}</h1>
      <h4>Likes:${this.likeCount}</h4>
      </div>
      <div class="mt-5">
      <h4>Posted By:</h4>
      <div class="d-flex align-items-center">
      <img class="poster-img m-1" src="${this.picture}" alt="">
      <h6>${this.name}</h6>
      </div>
      </div>
    </div>
    <div class="col-3 d-flex justify-content-center align-items-center">
      <button class="btn text-center" onclick="app.likersController.likePost('${this.id}')"><h1><i class="mdi mdi-heart"></i></h1></button>
    </div>
  </section>`
  }
  static ActivePostTemplate(){
    return`
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`
  }
}