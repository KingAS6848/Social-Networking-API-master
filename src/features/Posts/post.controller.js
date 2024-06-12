import PostSchema from "./post.model.js";

export default class postController {

    async getAllPosts(req, res) {
        try {
            const allPost = await PostSchema.getAll();
            return res.status(200).send(allPost);
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async newPost(req, res) {
        try {
            const caption = req.body.caption;
            const userID = req.user.id;
            const imageURL = req.file.path;
            const newPost = await PostSchema.newPost(userID, caption, imageURL);

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

    async UserPosts(req, res) {
        try {
            const email = req.query.email;
            const userPosts = await PostSchema.getByEmail(email);
            if (userPosts && userPosts.length > 0) {
                return res.status(200).send(userPosts);
            }
            return res.status(204).send({
                success: false,
                message: "No posts found for the user"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async postById(req, res) {
        try {
            const { id } = req.params;
            const post = await PostSchema.getById(id);
            if (post) {
                return res.status(200).send(post);
            }
            return res.status(400).send({
                success: false,
                message: "Invalid post ID"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async deletePost(req, res) {
        try {
            const id = req.params.id;
            const success = await PostSchema.delete(id);
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
            console.error(error);
            return res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }
    }

    async updatePost(req, res) {
        try {
            const id = req.params.id;
            const caption = req.body.caption;
            const imageURL = req.file.path;
            const updatedPost = await PostSchema.update(id, caption, imageURL);
            if (updatedPost) {
                return res.status(200).send(updatedPost);
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
}
