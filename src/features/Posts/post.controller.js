import PostSchema from "./post.model.js";

export default class postController{


    getAllPosts(req,res){
        const allPost = PostSchema.getAll();
      return  res.status(200).send(allPost);
    }

    newPost(req,res){

            const caption = req.body.caption;
            const userID = req.user.id;
            const imageURL = req.file.path;
            const newPost = PostSchema.newPost(userID,caption,imageURL);
    
            if(newPost){
                console.log(newPost);
                return res.status(201).send({
                    success:"true",
                    message:"Post Created Sucessfully"
                });
           
            }
            return res.status(400).send({
                success:"false",
                message:"Bad Request"
            });
        
  

    }

    UserPosts(req,res){
        const email = req.query.email;
       const userPosts = PostSchema.getByEmail(email);
        if(userPosts){
           return res.status(200).send(userPosts);

        }
        return res.status(204).send({
            success:"false",
            message:"Either it is empty or not exist"
        });
    
    }

    postById(req,res){
        const {id} = req.params;
        const post = PostSchema.getById(id);
        if(post){

            return res.status(200).send(post);
        }
        return res.status(400).send({
            success:"false",
            message:"Invalid Credentials"
        });

    }
    deletePost(req,res){
        const id =req.params.id;
        const success = PostSchema.delete(id);
        if(success){
            return res.status(200).send({
                success:"true",
                message:"Post Deleted Successfully"
            })
        }

            return res.status(400).send({
            success:"false",
            message:"Bad Request"
        })
    }

    updatePost(req,res){
        const id = req.params.id;
        const caption = req.body.caption;
        const imageURL = req.file.path;
        const updatedPost = PostSchema.update(id,caption,imageURL);
        if(updatedPost){
            return res.status(200).send(updatedPost);
        }
        return res.status(400).send({
            success:"false",
            message:"Bad Request"
        })
    }
}