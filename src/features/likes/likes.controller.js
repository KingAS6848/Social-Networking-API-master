import LikeSchema from "./likes.model.js";

export default class likeController{

    toggleLikes(req,res){
        const postId = req.params.id;
        const userId = req.user.id;
        const post = LikeSchema.toggle(postId,userId);
        return res.send(post);
    }

    postLikes(req,res){
        const id = req.params.id;
        const likes = LikeSchema.postLikes(id);
        if(likes){
            return res.status(200).send(likes);
        }
        return res.status(400).send({
            success:"False",
            message:"Bad request"
        })
    }
}