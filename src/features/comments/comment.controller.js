import CommentSchema from "./comment.model.js";

export default class commentController {
    addComment(req, res) {
        try {
            const postId = req.params.id;
            const commentText = req.body.comment;
            const userId = req.user.id;

            const result = CommentSchema.addComment(postId, userId, commentText);

            if (result) {
                return res.status(201).send(result);
            }
        } catch (error) {
            // console.error(erro);
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }

    postComments(req, res) {
        try {
            const postId = req.params.id;
            const comments = CommentSchema.postComments(postId);

            if (comments) {
                return res.status(200).send(comments);
            }
            return res.status(400).send({
                success: false,
                message: "No comments found"
            });
        } catch (error) {
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }

    updateComment(req, res) {
        try {
            const id = req.params.id;
            const commentText = req.body.comment;
            const updatedComment = CommentSchema.update(id, commentText);

            if (updatedComment) {
                return res.status(200).send(updatedComment);
            }
            return res.status(400).send({
                success: false,
                message: "No comment found"
            });
        } catch (error) {
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }

    delete(req, res) {
        try {
            const id = req.params.id;
            const result = CommentSchema.delete(id);

            if (result) {
                return res.status(200).send({
                    success: true,
                    message: "Comment deleted successfully"
                });
            }
            return res.status(400).send({
                success: false,
                message: "No comment found"
            });
        } catch (error) {
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }
}
