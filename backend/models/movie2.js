const mongoose = require('mongoose');
const {conn2} = require('../db')

const Movie2 = conn2.model('Movie2', new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }
}));

module.exports = Movie2;
