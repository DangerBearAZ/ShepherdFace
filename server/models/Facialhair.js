const mongoose = require('mongoose'); 

const { Schema } = mongoose;

const facialHairSchema = new Schema({
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

  const facialHair = mongoose.model('category', categorySchema)