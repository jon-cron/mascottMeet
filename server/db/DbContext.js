import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CommentSchema } from "../models/Comment.js";
import { LikerSchema } from "../models/Liker.js";
import { PostSchema } from "../models/Post.js";
import { ValueSchema } from '../models/Value'


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);


  Posts = mongoose.model('Post', PostSchema);

  Likers = mongoose.model('Liker', LikerSchema);


  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
