import { Schema, model } from "mongoose";

const Post = new Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = model("Post", Post);

export default PostSchema;
