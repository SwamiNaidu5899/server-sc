const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });
   
  module.exports = mongoose.model('Video', VideoSchema)