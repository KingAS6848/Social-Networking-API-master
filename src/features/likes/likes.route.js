import express from 'express';
import likeController from './likes.controller.js';

const likeRoute =  express.Router();

const controller = new likeController();

likeRoute.post('/:id',controller.toggleLikes);
likeRoute.get('/:id',controller.postLikes);



export default likeRoute;