const express = require('express')
const path = require('path')
const blogs = require('../data/blogs.js');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home');
    //res.sendFile(path.join('D:/Express.js/blog/Templates/index.html'));
})

router.get('/blog',(req,res)=>{

    // res.sendFile(path.join('D:/Express.js/blog/views/bloghome.html'));
    res.render('bloghome',{
        blogs:blogs
    })
})

router.get('/blogpost/:slug',(req,res)=>{
  
   myblog = blogs.filter((e)=>{
     return  e.slug == req.params.slug;
   })
   res.render('blogpage.handlebars',{
    title:myblog[0].title,
    content : myblog[0].content
})
   // res.sendFile(path.join('D:/Express.js/blog/views/blogpage.html'));
})

module.exports = router;