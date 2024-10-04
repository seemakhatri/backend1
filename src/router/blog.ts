import { Router } from "express";
import { createBlog, getBlogs, uploadImage } from "../controller/BlogController";


const router = Router();

router.post('/', uploadImage, createBlog);
router.get('/', getBlogs);


export default router;