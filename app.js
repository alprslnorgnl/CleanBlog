const express = require('express')
const mongoose = require('mongoose');
const ejs = require('ejs')
const Post = require('./models/Post')

const app = express()

//CONNECT DB
mongoose.connect('mongodb://127.0.0.1:27017/cleanBlog');

//TEMPLATE ENGINE
app.set("view engine","ejs")


//MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//ROUTES
app.get('/',async (req,res) => {                //Kök dizine yapılan get request e cevap olarak index sayfası gönderilir
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
})

app.get('/index',async (req,res) => {      // /index dizinine yapılan get request e cevap olarak index sayfası gönderilir
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
})

app.get('/about',(req,res) => {            // /about dizinine yapılan get request e cevap olarak about sayfası gönderilir
    res.render('about')
})

app.get('/add_post',(req,res) => {         // /add_post dizinine yapılan get request e cevap olarak
    res.render('add_post')
})

app.get('/posts/:id', async (req,res) => {             // /posts/id adresine yapılan get request e cevap olarak post sayfası
    const post = await Post.findById(req.params.id)   // gönderilir 
    res.render('post',{
        post
    })
})

//-*************************

app.post('/blogs',(req,res) => {            //  form sumbit edildiği zaman buraya istek gönderilir
    Post.create(req.body)
    res.redirect('/')
})




const port = 3000
app.listen(port,()=>{
    console.log(`Server http://localhost:${port} adresinde başlatıldı..`)
})