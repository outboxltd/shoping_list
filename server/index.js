const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
<<<<<<< HEAD
<<<<<<< HEAD
const session = require('express-session');


=======
const session = require('express-session')
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
=======
const session = require('express-session')
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
const path = require('path');
const app = express();
const dbConnction = require('./models/db.js')



const userRouter = require('./routes/user');
const itemRouter = require('./routes/item');

app.use(express.static('../client/dist'));
app.use(bodyParser.json());

app.use(session({
    secret: 'bla bla bla',
    resave: false,
    saveUninitialized: true
}))

app.use('/api/user', userRouter);
app.use('/api/item', itemRouter);



app.all('*', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('connected!')
});

// maybe good for the login

app.use(session({ secret: 'i love you' }));
app.use(bodyParser.json());
app.use(express.static('./client/dist'));

app.post('/api/login', (req, res) => {
    User.login(req.body).then(user => {
        if (user) {
            delete user.password;
            req.session.user = user;
            return res.sendStatus(204);
        }

        return res.sendStatus(300);
    })
        .catch(err => {
            console.log(err);
            return res.sendStatus(500);
        });
});

// maybe good for the login
