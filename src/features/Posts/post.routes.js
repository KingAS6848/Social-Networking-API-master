import express from 'express';
import postController from './post.controller.js';
import {uploadMiddleware} from './../../middlwares/upload.middlware.js'
const postRoute = express.Router();

const controller = new postController();


postRoute.post('/' ,uploadMiddleware.single('imageURL'),controller.newPost);
postRoute.get('/all',controller.getAllPosts);
postRoute.get('/user',controller.UserPosts);
postRoute.get('/:id',controller.postById);
postRoute.delete('/:id',controller.deletePost);
postRoute.put('/:id',uploadMiddleware.single('imageURL'),controller.updatePost);



export default postRoute;