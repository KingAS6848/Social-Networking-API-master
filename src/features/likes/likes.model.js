import PostSchema from "../Posts/post.model.js";

const likes = [];

export default class LikeSchema {
    constructor(id, postId, userId) {
        this.id = id;
        this.postId = postId;
        this.userId = userId;
    }

    static postLikes(postId) {
        const post = PostSchema.getById(postId);
        if (!post) {
            throw new Error(`Post with ID ${postId} not found.`);
        }
        if (post.likes) {
            return post.likes;
        }
        return null;
    }

    static toggle(postId, userId) {
        const post = PostSchema.getById(postId);
        if (!post) {
            throw new Error(`Post with ID ${postId} not found.`);
        }

        if (!post.likes) {
            post.likes = [];
        }

        const existingLikeIndex = post.likes.findIndex(like => like.userId === userId);

        if (existingLikeIndex !== -1) {
            // User has already liked the post, so remove the like
            const removedLike = post.likes.splice(existingLikeIndex, 1)[0];

            // Also remove the like from the global likes array
            const globalLikeIndex = likes.findIndex(like => like.id === removedLike.id);
            if (globalLikeIndex !== -1) {
                likes.splice(globalLikeIndex, 1);
            }

            console.log(`User ${userId} removed their like from the post ${postId}.`);
        } else {
            // User has not liked the post yet, so add the like
            const newLike = new LikeSchema(generateUniqueId(), postId, userId);
            post.likes.push(newLike);
            likes.push(newLike); // Add like to the global likes array

            console.log(`User ${userId} liked the post ${postId}.`);
        }

        return post;
    }
}

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
