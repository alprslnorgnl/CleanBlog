const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const BlogSchema = new Schema({
    postTitle: String,
    postSubTitle: String,
    postMeta: String,
    dateCreated: {
      type: Date,
      default: Date.now
    }
  });

  const Post = mongoose.model('Post', BlogSchema);

//   export default Blog

module.exports = Post