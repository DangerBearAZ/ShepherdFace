const mongoose = require('mongoose'); 

const { Schema } = mongoose;

const facialhairSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
    }
  });

  const facialhair = mongoose.model('Facialhair', facialhairSchema);

  module.exports = Facialhair;