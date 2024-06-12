import PostSchema from "./post.model.js";

export default class postController {

     getAllPosts(req, res) {
        try {
            const allPost =  PostSchema.getAll();
            return res.status(200).send(allPost);
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }
    }

     newPost(req, res) {
        try {
            const caption = req.body.caption;
            const userID = req.user.id;
            const imageURL = req.file.path;
            const newPost =  PostSchema.newPost(userID, caption, imageURL);

            if (newPost) {
                console.log(newPost);
                return res.status(201).send({
                    success: true,
                    message: "Post created successfully"
                });
            }
            return res.status(400).send({
                success: false,
                message: "Bad request"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }
    }

     UserPosts(req, res) {
        try {
            const email = req.query.email;
            const userPosts =  PostSchema.getByEmail(email);
            if (userPosts && userPosts.length > 0) {
                return res.status(200).send(userPosts);
            }
            return res.status(204).send({
                success: false,
                message: "No posts found for the user"
            });
        } catch (error) {
           
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }

     postById(req, res) {
        try {
            const { id } = req.params;
            const post =  PostSchema.getById(id);
            if (post) {
                return res.status(200).send(post);
            }
            return res.status(400).send({
                success: false,
                message: "Invalid post ID"
            });
        } catch (error) {
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }

     deletePost(req, res) {
        try {
            const id = req.params.id;
            const success =  PostSchema.delete(id);
            if (success) {
                return res.status(200).send({
                    success: true,
                    message: "Post deleted successfully"
                });
            }
            return res.status(400).send({
                success: false,
                message: "Bad request"
            });
        } catch (error) {
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }

     updatePost(req, res) {
        try {
            const id = req.params.id;
            const caption = req.body.caption;
            const imageURL = req.file.path;
            const updatedPost =  PostSchema.update(id, caption, imageURL);
            if (updatedPost) {
                return res.status(200).send(updatedPost);
            }
            return res.status(400).send({
                success: false,
                message: "Bad request"
            });
        } catch (error) {
            return res.status(error.code).send({
                success: false,
                message: error.message
            });
        }
    }
}
