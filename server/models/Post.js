import { Schema } from "mongoose";




export const PostSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxLength: 500 },
  img: { type: String, required: true, maxLength: 400 },
  posterId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
  { timestamps: true, toJSON: { virtuals: true } })


PostSchema.virtual('postedBy', {
  localField: 'posterId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})


PostSchema.virtual('likeCount', {
  localField: "_id",
  foreignField: "postId",
  ref: "Liker",
  count: true
})

PostSchema.virtual('comments', {
  localField: "_id",
  foreignField: "postId",
  ref: 'Comment',
  justOne: false
}
)
