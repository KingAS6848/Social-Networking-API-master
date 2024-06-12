import express from 'express';
import userRoute from './src/features/User/user.routes.js';
import jwtMiddleware from './src/middlwares/jwt.middleware.js';
import postRoute from './src/features/Posts/post.routes.js';
import commentRoute from './src/features/comments/comment.route.js';
import likeRoute from './src/features/likes/likes.route.js';
import logMiddlware from './src/middlwares/log.middlware.js';
const server = express();
const port = 8000;

server.use(express.json());
server.use(express.urlencoded({extended:false}));


server.use('/api/users',logMiddlware,userRoute);
server.use('/api/posts',logMiddlware,jwtMiddleware,postRoute);
server.use('/api/comments',logMiddlware,jwtMiddleware,commentRoute);
server.use('/api/likes',logMiddlware,jwtMiddleware,likeRoute);


server.listen(port,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Server Running Succesfully: ", port);
})