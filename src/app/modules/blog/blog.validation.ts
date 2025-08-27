import { z } from "zod";

export const blogValidation = z.object({
  title: z.string().min(1, "Title is required").max(200),
  content: z.string().min(1, "Content is required"),
  author: z.string().min(1, "Author is required"),
});


