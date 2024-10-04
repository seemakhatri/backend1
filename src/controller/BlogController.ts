import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import Blog from '../model/Blog';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    },
});


const upload = multer({ storage });

export const createBlog = async (req: Request, res: Response) => {
    const { title, content } = req.body;
    let imageUrl: string | undefined;

    // Check if file is uploaded
    if (req.file) {
        imageUrl = req.file.path;  // Use the uploaded file's path
    }

    const blog = new Blog({ title, content, imageUrl });

    try {
        await blog.save();
        res.status(201).json(blog);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export const getBlogs = async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
// Use multer for handling image uploads in the route
export const uploadImage = upload.single('image');