import { Schema } from "mongoose";






export const LikerSchema = new Schema({
  likerId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },

  postId: { type: Schema.Types.ObjectId, required: true, ref: "Post" }
}, { timestamps: true, toJSON: { virtuals: true } })





LikerSchema.virtual('liker', {
  localField: "likerId",
  ref: "Account",
  foreignField: "_id",
  justOne: true
})



LikerSchema.index({ likerId: 1, postId: 1 }, { unique: true })