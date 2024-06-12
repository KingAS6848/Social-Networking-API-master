export default class UserSchema {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static getAll() {
        return users;
    }

    static add(name, email, password) {
        const newUser = new UserSchema(users.length + 1, name, email, password);
        users.push(newUser);
        return newUser;
    }

    static login(email, password) {
        const userFound = users.find(user => user.email === email && user.password === password);
        if (!userFound) {
            throw new Error("Invalid email or password.");
        }
        return userFound;
    }
}

const users = [
    new UserSchema(1, 'Alice', 'alice@example.com', 'password123'),
    new UserSchema(2, 'Bob', 'bob@example.com', 'securepass'),
    new UserSchema(3, 'Charlie', 'charlie@example.com', 'secretword'),
    new UserSchema(4, 'David', 'david@example.com', '12345678'),
    new UserSchema(5, 'Eve', 'eve@example.com', 'letmein')
];
