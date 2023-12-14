import { Router } from "express";
import { createPost } from "../controllers/postController";


const post_router = Router()

post_router.post('/create', createPost)

export default post_router;