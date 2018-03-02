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
    age: String,
    date: { type: Date, default: new Date() }
});

const User = mongoose.model('User', userSchema);

// -----------------------------------------------

const itemSchema = mongoose.Schema({
    itemname: String,
    item_color: String,
    item_price: Number,
    item_amunt: Number
});

const Item = mongoose.model('Item', userSchema);

// -----------------------------------------------



module.exports = { 
    User, 
    Item
};