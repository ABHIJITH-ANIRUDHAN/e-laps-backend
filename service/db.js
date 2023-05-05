const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EcomServer', () => {
  console.log('connected to mongodb');
})

const Product = mongoose.model('products', {
  id: Number,
  name: String,
  os: String,
  price: Number,
  description: String,
  category: String,
  category2: String,
  image: String,
  ram: String,
  discount: Number
});

const Admin = mongoose.model('admins', {
  id: Number,
  password: String,
  orders:Array
})

const User = mongoose.model('users', {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  wishlist: Array,
  orders:Array,
  cart:Array
})

module.exports = {
  Product,
  Admin,
  User
}