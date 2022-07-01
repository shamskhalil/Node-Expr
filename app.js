const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const userStore = [];
let counter = 0;
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



//fetch all users
app.get('/users', (req, res) => {
    res.json({ users: userStore });
});

//fetch one user
app.get('/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let userToGet = null;
    userStore.forEach(user => {
        if (user.id === id) {
            userToGet = user;
        }
    });
    res.json({ user: userToGet });
});

//create user
app.post('/users', (req, res) => {
    let newUser = req.body;
    newUser.id = counter;
    userStore.push(newUser);
    counter++;
    res.json({ user: newUser });
});

app.put('/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    userStore[id] = req.body;
    let userToBeUpdated = null;
    userStore.forEach(user => {
        if (user.id === id) {
            userToBeUpdated = user;
        }
    });
    let userIdx = userStore.indexOf(userToBeUpdated);
    userStore[userIdx] = req.body;
    userStore[userIdx].id = id;
    res.json({ user: userStore[userIdx] });
});

app.delete('/users/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let userToBeDeleted = null;
    userStore.forEach(user => {
        if (user.id === id) {
            userToBeDeleted = user;
        }
    });
    let userIdx = userStore.indexOf(userToBeDeleted);
    if (userIdx > -1) {
        userStore.splice(userIdx, 1);
    }
    res.json({ message: "User Deleted !" });
});


app.listen(3000, () => {
    console.log('Server listening on port 3000');
})