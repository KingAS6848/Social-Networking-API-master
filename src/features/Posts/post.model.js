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

    static getByEmail(email){
      const userId = UserSchema.getAll().find(u=> u.email == email);

      const userPosts = posts.filter(p=> p.id == userId);

      return userPosts;
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
      userID: 102,
      caption: "Hiking adventure in the mountains",
      imageURL: "https://example.com/images/hiking.jpg"
    },
    {
      id: 3,
      userID: 103,
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
  