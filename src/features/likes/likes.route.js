import express from 'express';
import likeController from './likes.controller.js';

const likeRoute =  express.Router();

const controller = new likeController();

likeRoute.post('/:id',controller.toggleLikes);



export default likeRoute;