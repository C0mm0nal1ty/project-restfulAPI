//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article",articleSchema);

app.route("/articles")

.get(function(req,res){
  Article.find({}, function(err,foundArticles){
    if(!err){
      res.send(foundArticles);
    }
    else{
      res.send(err);
    }
  });
})

.post(function(req,res){

  const newarticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newarticle.save(function(err){
    if(!err){
      res.send("Added a new article.");
    }
    else{
      res.send(err);
    }
  });

})

.delete(function(req,res){
  Article.deleteMany({}, function(err){
    if(!err){
      res.send("Deleted all articles.");
    }
    else{
      res.send(err);
    }
  });
});

app.route("/articles/:articleName")
.get(function(req,res){
  const articleName = req.params.articleName;

    Article.findOne({ title: articleName},function(err,foundArticle){
      if(!err){
        if(!foundArticle){
          res.send("No article exits.");
        }
        else{
          res.send(foundArticle);
        }
      }
    });
})

.put(function(req,res){

  const articleName = req.params.articleName;

  Article.replaceOne(
    {title: articleName},
    {title: req.body.title, content: req.body.content},
    {overwrite:true},
    function(err,results){
      if(!err){
        res.send("Updated article.");
      }else{
        res.send(err);
      }
  });
})

.patch(function(req,res){
  const newContent = req.body;
  const articleName = req.params.articleName;

  Article.updateOne(
    {title: articleName},
    {$set: newContent},
    function(err,results){
      if(!err){
        res.send("Updated article with your changes.");
      }
      else{
        res.send(err);
      }
  });
})

.delete(function(req,res){

  const articleName = req.params.articleName;

  Article.deleteOne(
    {title: articleName},
    function(err,results){
      if(!err){
        res.send("Delete specified article.");
      }
      else{
        res.send(err);
      }
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});


//
