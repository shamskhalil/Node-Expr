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

    getAllUsers() {
        return this.userStore;
    }

    getSingleUser(id) {
        let userToGet = null;
        this.userStore.forEach(user => {
            if (user.id === id) {
                userToGet = user;
            }
        });
        return userToGet;
    }

    updateUser(id, userObj) {
        this.userStore[id] = userObj;
        let userToBeUpdated = null;
        this.userStore.forEach(user => {
            if (user.id === id) {
                userToBeUpdated = user;
            }
        });
        let userIdx = this.userStore.indexOf(userToBeUpdated);
        this.userStore[userIdx] = userObj;
        this.userStore[userIdx].id = id;
        return this.userStore[userIdx];
    }

    deleteUser(id) {
        let userToBeDeleted = null;
        this.userStore.forEach(user => {
            if (user.id === id) {
                userToBeDeleted = user;
            }
        });
        let userIdx = this.userStore.indexOf(userToBeDeleted);
        if (userIdx > -1) {
            this.userStore.splice(userIdx, 1);
        }
        return 'User deleted !';
    }
}

module.exports = new UserDao();