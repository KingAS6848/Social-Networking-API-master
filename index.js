import express from 'express';
import userRoute from './src/features/User/user.routes.js';
import jwtMiddleware from './src/middlwares/jwt.middleware.js';
import postRoute from './src/features/Posts/post.routes.js';

const server = express();
const port = 8000;

server.use(express.json());
server.use(express.urlencoded({extended:false}));


server.use('/api/users',userRoute);
server.use('/api/posts',jwtMiddleware,postRoute);


server.listen(port,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Server Running Succesfully: ", port);
})