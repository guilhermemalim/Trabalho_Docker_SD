const mongoose = require('mongoose');
const {conn1} = require('../db')

const Movie = conn1.model('Movie', new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }
}));

module.exports = Movie;
