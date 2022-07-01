const UserModel = require('../models/user.model');
class UserDao {

    constructor() {
        this.userStore = [];
        this.counter = 0;
    }

    createUser(reqBody) {
        let newUser = new UserModel(reqBody);
        newUser.id = this.counter;
        this.userStore.push(newUser);
        this.counter++;
        return newUser;
    }
}