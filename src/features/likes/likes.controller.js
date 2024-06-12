import LikeSchema from "./likes.model.js";

export default class likeController {

    toggleLikes(req, res) {
        try {
            const postId = req.params.id;
            const userId = req.user.id;
            const post = LikeSchema.toggle(postId, userId);
            return res.send(post);
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Internal server error"
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
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }
    }
}
