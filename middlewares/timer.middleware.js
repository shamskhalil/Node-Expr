function timed() {
    return (req, res, next) => {
        console.log('Timer started !');
        req.start = process.hrtime();
        next();
    }
}
module.exports.timer = timed;