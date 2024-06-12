import LikeSchema from "./likes.model.js";

export default class likeController {

    toggleLikes(req, res) {
        try {
            const postId = req.params.id;
            const userId = req.user.id;
            const post = LikeSchema.toggle(postId, userId);
            return res.send(post);
        } catch (error) {
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }

    postLikes(req, res) {
        try {
            const id = req.params.id;
            const likes = LikeSchema.postLikes(id);
            if (likes) {
                return res.status(200).send(likes);
            }
            return res.status(400).send({
                success: false,
                message: "No likes found for the post"
            });
        } catch (error) {
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }
}
