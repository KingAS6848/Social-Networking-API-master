import UserSchema from "./user.model.js";
import jwt from 'jsonwebtoken';
export default class userController{


  signup(req,res) {
    
    try {
      const { name, email, password } = req.body;
      const newUser = UserSchema.add(name, email, password);
      if (!newUser) {
          return res.status(400).send({
              success: false,
              message: "Invalid credentials"
          });
      }
      return res.status(201).send({
          success: true,
          message: "Account created successfully"
      });
  } catch (error) {
      console.error(error);
      return res.status(500).send({
          success: false,
          message: "Internal server error"
      });
  }
}

 

 login(req,res){
    const {email,password} = req.body;
    const userFound = UserSchema.login(email,password);
    if(!userFound){
        return res.status(404).send({
          success:"false",
          message:"User Not Found"
      });
    }

   const token = jwt.sign({email:userFound.email,id:userFound.id },"thisistopseceret",{expiresIn:'1h'});
    return res.status(200).send({
      success:"true",
      message:"User Login Sucessfully",
      token
  });
 }
}