import mongoose from 'mongoose';

//a post that needs to have this information
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage=mongoose.model('PostMessage',postSchema);

export default PostMessage;
