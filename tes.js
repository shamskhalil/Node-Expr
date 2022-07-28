const crypto = require('crypto');
let md5 = crypto.createHash('sha256');
let password = "secret";

let hp = md5.update(password).digest()
console.log(`sha1 of ${password} is ${hp.toString('base64')}`);


const bcrypt = require('bcrypt');

let salt = bcrypt.genSaltSync(12);


let hpassword = bcrypt.hashSync(password, salt);
//console.log(hpassword);

let flag = bcrypt.compareSync(password, hpassword);
//console.log(`Password matched :${flag}`);



