const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, required: true, max: 30 },
  password: { type: String, required: true, max: 20 },
  name: { type: String, required: true, max: 30 },
  address: { type: String, required: true, max: 20 },
  age: { type: Number, required: true },
  phone: { type: Number, required: true },
  avatar: { type: String },
});

module.exports = model('Users', UserSchema);

/* {
  "email": "prueba",
  "password": "123",
  "name": "prueba",
  "address": "prueba",
  "age": 12,
  "phone": 12
} */
