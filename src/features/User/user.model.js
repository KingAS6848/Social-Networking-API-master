export default class UserSchema{

    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getAll(){
        return users;
    }

    static add(name,email,password){
          const newUser = new UserSchema(users.length+1,name,email,password);
          users.push(newUser);
          return newUser;
    }

    static login(email,password){
        const userFound = users.find(e=> e.email === email && e.password === password);
        
          return userFound;

    }
}

const users =[];