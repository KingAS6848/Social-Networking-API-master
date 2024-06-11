import express from 'express';
import commentController from './comment.controller.js';

const commentRoute = express.Router();
const controller = new commentController();

commentRoute.post('/:id',controller.addComment);
commentRoute.get('/:id',controller.postComments);
commentRoute.put('/:id',controller.updateComment);
commentRoute.delete('/:id',controller.delete);


export default commentRoute;