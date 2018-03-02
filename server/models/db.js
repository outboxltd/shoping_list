const mongoose = require('mongoose');
mongoose.connect('mongodb://outbox:19371937@ds227858.mlab.com:27858/shoping_list');


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('im in !!!')
});

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    city: String,
<<<<<<< HEAD
<<<<<<< HEAD
    age: String
=======
    age: String,
    date: { type: Date, default: new Date() }
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
=======
    age: String,
    date: { type: Date, default: new Date() }
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
});

const User = mongoose.model('User', userSchema);

// -----------------------------------------------

const itemSchema = mongoose.Schema({
<<<<<<< HEAD
<<<<<<< HEAD
    itemname: String,
    item_color: String,
    item_price: Number,
    item_amunt: Number
=======
=======
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
    itemName: String,
    itemColor: String,
    itemPrice: String,
    itemAmunt: Number
<<<<<<< HEAD
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
=======
>>>>>>> 779167af03fd4576254420efa810499672b2acd9
});

const Item = mongoose.model('Item', userSchema);

// -----------------------------------------------



module.exports = { 
    User, 
    Item
};