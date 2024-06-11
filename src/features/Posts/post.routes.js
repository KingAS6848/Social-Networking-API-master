import express from 'express';
import postController from './post.controller.js';
import {uploadMiddleware} from './../../middlwares/upload.middlware.js'
const postRoute = express.Router();

const controller = new postController();


postRoute.post('/' ,uploadMiddleware.single('imageURL'),controller.newPost);
postRoute.get('/all',controller.getAllPosts);
postRoute.get('/:id',controller.UserPosts);
postRoute.get('/:id',controller.UserPosts);


export default postRoute;