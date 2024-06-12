import express from 'express';
import userRoute from './src/features/User/user.routes.js';
import jwtMiddleware from './src/middlwares/jwt.middleware.js';
import postRoute from './src/features/Posts/post.routes.js';
import commentRoute from './src/features/comments/comment.route.js';
import likeRoute from './src/features/likes/likes.route.js';
import logMiddlware from './src/middlwares/log.middlware.js';
import { ApplicationError } from './src/error-handler/applicationError.js';
const server = express();
const port = 8000;

server.use(express.json());
server.use(express.urlencoded({extended:false}));


server.use('/api/users',userRoute);
server.use('/api/posts',logMiddlware,jwtMiddleware,postRoute);
server.use('/api/comments',logMiddlware,jwtMiddleware,commentRoute);
server.use('/api/likes',logMiddlware,jwtMiddleware,likeRoute);

server.use((err, req, res, next)=>{
    if (err instanceof ApplicationError){
      res.status(err.code).send(err.message);
    } else {
      console.error(err); // Log the error for debugging purposes
      res.status(500).send('Something went wrong, please try later');
    }
});

server.use((req,res)=>{
    return res.status(404).send(`This Page Doen't Exist , Read the "Readme.md" File`);
})

server.listen(port,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Server Running Succesfully: ", port);
})