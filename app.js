//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require('lodash');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices .";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est .Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices";

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
let posts=[]

 app.get('/',(req,res)=>{
  res.render("home",{homecontent:homeStartingContent,posts:posts});
  // console.log(posts);
 })
 app.get('/about',(req,res)=>{
  res.render("about",{aboutcontent : aboutContent});
  // res.render("ejs file name",{key:value});
 })
 app.get('/contact',(req,res)=>{
  res.render("contact",{contact:contactContent});
 })
 app.get('/compose',(req,res)=>{
  res.render("compose");
 })
 app.get('/posts/:id',(req,res)=>{
  let id =_.lowerCase(req.params.id);
  for(let i=0;i<posts.length;i++){
    let id1= _.lowerCase(posts[i].title);
    if(id1===id){
      // console.log(`match found`);
      res.render("post",{posot:posts[i]})
    }
  }
 })
 app.post('/compose',(req,res)=>{
  const post={
    title : req.body.compose,
    body : req.body.content
  }
  posts.push(post);
  // console.log(post);
  res.redirect('/');
  
 })

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
