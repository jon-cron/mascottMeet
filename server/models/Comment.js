import { Schema } from "mongoose";


export const CommentSchema = new Schema({
  commentMessage: {type: String, required:true },
  commenterId:{type: Schema.Types.ObjectId, ref: 'Account'},
  postId:{type: Schema.Types.ObjectId, ref: 'Post'},
},
  { timestamps: true, toJSON: { virtuals: true } }  
)

