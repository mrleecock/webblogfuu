const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Mblog = require('./models/mblog');



// get all micro blogs
router.get("/", (req, res) => {
	/*
	Mblog.ind(function (err, blogs) {
		if (err) return console.error(err);
		console.log(blogs);
	*/
	res.send('Hello');
	
  });
});

router.post("/", (req, res) => {
  const mblog = new Mblog({
  	blog_id: mongoose.Types.ObjectId(), 
  	author: req.body.author,
   blog_text: req.body.blog_text
  });
  

  if (!mblog.author || !mblog.blog_text) {
    return res.status(400).json({ msg: "Error" });
  }
	mblog.save(function (err){
		if (err) return console.error(err);
		res.send('db action ok');	
	});

});

module.exports = router;
