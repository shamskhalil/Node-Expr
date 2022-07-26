const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//  get /add/a/b

// CRUD OPERATIONS  => RESTFULL VERBS (HTTP)
// CREATE           = > POST
// READ             = > GET //Idemportant
// UPDATE           = > PUT / PATCH
// DELETE           = > DELETE

//RESOURCES /users
// get /users fetches all users
// get /users/id fetches only user with id 
// post /users am creating a new user, Body of request is the user payload
// put /users/id am updating user with id, Body of requset is the data to be updated
// delete /user/id  delete uuser with id

app.use(require('./middlewares/timer.middleware').timer());

const userRoute = require('./routes/user.route')();
app.use('/api/v1/user', userRoute);


app.listen(3000, () => {
    console.log('Server listening on port 3000');
})