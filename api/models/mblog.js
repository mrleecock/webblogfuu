const mongoose = require('mongoose');

const mblogSchema = mongoose.Schema({
	 blog_id: mongoose.Schema.Types.ObjectId,
    author: String,
    blog_text: String
});

module.exports = mongoose.model('Mblog', mblogSchema);
