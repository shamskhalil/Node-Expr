
class UserModel {
    constructor(obj) {
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.gender = obj.gender;
        this.id = 0;
    }
}
module.exports = UserModel;