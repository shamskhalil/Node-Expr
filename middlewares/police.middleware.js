function auth(rolesArray) {

    return (req, res, next) => {
        const usertype = req.headers['auth'] || 'guest';
        if (rolesArray.includes(usertype)) {
            console.log('Permission granted !!!');
            next();
        }
        else {
            return res.status(200).json({ msg: 'Acces denied, you are allowed' });
        }
    }
}
module.exports.auth = auth;