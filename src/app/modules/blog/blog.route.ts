import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidation } from "./blog.validation";

const router = Router()

router.post("/", validateRequest(blogValidation), )


export default router