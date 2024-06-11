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
        const newId = comments.length +1;
        const newComment = new CommentSchema(newId, postId, userId, commentText);
        comments.push(newComment);
        const post = PostSchema.getAll().find(p=> p.id == postId);
        if(post){
            if(!post.comment){
                post.comment =[];
            }
           post.comment.push(newComment);
           return post;
        }
        return null;
    }

    static postComments(postId){
        const post = PostSchema.getAll().find(p=> p.id == postId);
        if(post.comment){
            return post.comment;
        }
        return null;
    }

    static update(id,comment){
            const posts = PostSchema.getAll();
            for(let post of posts){

                if(post.comment){
                const commentIndex=    post.comment.findIndex(c=> c.id == id);
                if(commentIndex !== -1){
                    post.comment[commentIndex].comment = comment;
                    return post.comment[commentIndex];
                }

              
                }
            }
            return null;
    }
   
    static delete(id){
    //    const commentIndex = PostSchema.getAll().findIndex((p)=>{
    //     if(!p.comment.id){
    //         return p.comment.id == id;
    //     }
    //    });
    //    const post = PostSchema.getAll();
    // const comment =  post.comment.splice(commentIndex,1);
    //  return comment;

    const posts =PostSchema.getAll();
    for(let post of posts){
        if(post.comment){

            const commentIndex = post.comment.findIndex(c=> c.id ==id);
            if(commentIndex !== -1){
              return  post.comment.splice(commentIndex,1);
            }
        }
    }
    }
}
