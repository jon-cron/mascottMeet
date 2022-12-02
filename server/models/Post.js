import { Schema } from "mongoose";




export const PostSchema = new Schema({
  name: { type: String, required: true, minLength: 6, maxLength: 30 },
  description: { type: String, required: true, minLength: 25, maxLength: 500 },
  img: { type: String, required: true, maxLength: 400 },
  posterId: { type: Schema.Types.ObjectId, required: true, ref: 'account' }
},
  { timestamps: true, toJSON: { virtuals: true } })


PostSchema.virtual('postedBy', {
  localField: 'posterId',
  ref: 'account',
  foreignField: '_id',
  justOne: true
})

