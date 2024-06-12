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
    return res.status(error.code).send({
      success: false,
      message: error.message
  });
  }
}

 

 login(req,res,next){

  try {
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
  } catch (error) {
    next(error);
  }
    
 }
}