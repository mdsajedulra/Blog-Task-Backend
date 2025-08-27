import mongoose, { Schema, Document } from "mongoose";
import { IBlog } from "./blog.interface";




const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const blogModel = mongoose.model<IBlog>("Post", blogSchema);
