import UserSchema from "../User/user.model.js";
export default class PostSchema{

    constructor(id,userID,caption,imageURL){
        this.id = id;
        this.userID = userID;
        this.caption = caption;
        this.imageURL = imageURL;
    
    }
    static getAll(){
        return posts;
    }

    static newPost(userID,caption,imageURL){
        const newPost = new PostSchema(Date.now().toString()+88, userID,caption,imageURL);
        posts.push(newPost);
        return  newPost;
    }

  static getByEmail(email) {
  // Retrieve the user by email
  const user = UserSchema.getAll().find(u => u.email === email);

  // Check if user exists
  if (!user) {
    return []; // Return an empty array if user is not found
  }

  // Filter posts for the given user ID
  const userPosts = posts.filter(p => p.userID === user.id);

  return userPosts;
}

    static getById(id){
          const post = posts.find(p=> p.id == id);
          return post;
    }

    static delete(id){
      // const postIndex = posts.findIndex(p=> p.id == id && p.userID == userId); 
      const postIndex = posts.findIndex(p=> p.id == id);
      if(postIndex >= 0){
       posts.splice(postIndex,1);
       return true;
      }
      return false;

    }
    static update(id,caption,imageURL){
      const postIndex = posts.findIndex(p=>p.id == id);
      if (postIndex !== -1) {
        posts[postIndex] = { ...posts[postIndex], caption, imageURL };
             return posts[postIndex] ;
      }
      
    }


    
}

const posts = [
    {
      id: 1,
      userID: 101,
      caption: "Beautiful sunset at the beach!",
      imageURL: "https://example.com/images/sunset.jpg"
    },
    {
      id: 2,
      userID: 2,
      caption: "Hiking adventure in the mountains",
      imageURL: "https://example.com/images/hiking.jpg"
    },
    {
      id: 3,
      userID: 2,
      caption: "Delicious homemade pizza",
      imageURL: "https://example.com/images/pizza.jpg"
    },
    {
      id: 4,
      userID: 104,
      caption: "Charming streets of an old town",
      imageURL: "https://example.com/images/old_town.jpg"
    },
    {
      id: 5,
      userID: 105,
      caption: "Exploring the city skyline at night",
      imageURL: "https://example.com/images/city_night.jpg"
    }
  ];
  