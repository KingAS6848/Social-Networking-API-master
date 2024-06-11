import UserSchema from "./user.model.js";
import jwt from 'jsonwebtoken';
export default class userController{


  signup(req,res) {
    
    const {name,email,password} = req.body;
     const newUser = UserSchema.add(name,email,password);
     if(!newUser){
        return res.status(400).send({
          success:"true",
          message:"Invalid Credentials"
      });

     }
     return res.status(201).send({
      success:"true",
      message:"Account Created Sucessfully"
  });

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

   const token=   jwt.sign({email:userFound.email,id:userFound.id },"thisistopseceret",{expiresIn:'1h'});
    return res.status(200).send({
      success:"true",
      message:"User Login Sucessfully",
      token
  });
 }
}