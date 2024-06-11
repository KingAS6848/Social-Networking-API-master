import likeSchema from "./likes.model.js";

export default class likeController{

    toggleLikes(req,res){
        const postId = req.params.id;
        const userId = req.user.id;
        const post = likeSchema.toggle(postId,userId);
        return res.send(post);
    }
}