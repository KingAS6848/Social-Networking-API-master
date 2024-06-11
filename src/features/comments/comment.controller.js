import CommentSchema from "./comment.model.js";

export default class commentController{

    addComment(req,res){
        const postId = req.params.id;
        const commentText = req.body.comment;
        const userId = req.user.id;

        const result = CommentSchema.addComment(postId,userId,commentText);
        // console.log('result',result);

        if(result){
          return  res.status(201).send(result);
        }

    }
    postComments(req,res){
        const postId = req.params.id;
        const comments = CommentSchema.postComments(postId);
        if(comments){
            return res.status(200).send(comments);
        }
        res.status(400).send({
            success:"false",
            message:"no comments found"
        });
    }

    updateComment(req,res){
        const id = req.params.id;
        const commentText = req.body.comment;
        const updatedComment = CommentSchema.update(id,commentText);
        if(updatedComment){
           return res.status(200).send(updatedComment);
        }
        return res.status(400).send({
            success:"false",
            message:"No Comment found"
        }) 
    }
    
    delete(req,res){
        const id = req.params.id;
        const result = CommentSchema.delete(id);
        if(result){
            return res.status(200).send({
                success:"true",
                message:"Comment Deleted Successfully"
            })
        }
        return res.status(400).send({
            success:"false",
            message:"No Comment found"
        })
    }
}