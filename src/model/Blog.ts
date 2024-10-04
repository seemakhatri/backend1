import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
    title: string;
    content: string;
    imageUrl?: string;
    createdAt: Date;
}

const BlogSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IBlog>('Blog', BlogSchema);