import PostSchema from "../Posts/post.model.js";

const comments = [];

export default class CommentSchema {
    constructor(id, postId, userId, comment) {
        this.id = id;
        this.postId = postId;
        this.userId = userId;
        this.comment = comment;
    }

    static addComment(postId, userId, commentText) {
        const newId = comments.length + 1;
        const newComment = new CommentSchema(newId, postId, userId, commentText);
        comments.push(newComment);
        const post = PostSchema.getAll().find(p => p.id == postId);
        if (!post) {
            throw new Error("Post not found");
        }
        if (!post.comment) {
            post.comment = [];
        }
        post.comment.push(newComment);
        return post;
    }

    static postComments(postId) {
        const post = PostSchema.getAll().find(p => p.id == postId);
        if (!post || !post.comment) {
            throw new Error("Post or comments not found");
        }
        return post.comment;
    }

    static update(id, comment) {
        const posts = PostSchema.getAll();
        for (let post of posts) {
            if (post.comment) {
                const commentIndex = post.comment.findIndex(c => c.id == id);
                if (commentIndex !== -1) {
                    post.comment[commentIndex].comment = comment;
                    return post.comment[commentIndex];
                }
            }
        }
        throw new Error("Comment not found");
    }

    static delete(id) {
        const posts = PostSchema.getAll();
        for (let post of posts) {
            if (post.comment) {
                const commentIndex = post.comment.findIndex(c => c.id == id);
                if (commentIndex !== -1) {
                    return post.comment.splice(commentIndex, 1);
                }
            }
        }
        throw new Error("Comment not found");
    }
}
