const express = require('express')
const mongoose = require('mongoose');
const ejs = require('ejs')
const Post = require('./models/Post')
const methodOverride = require('method-override')
const postController = require('./controllers/postController')

const app = express()


//CONNECT DB
mongoose.connect('mongodb+srv://alparslan:ZFxm9usdJRTwvmAE@cleanblog-app.mudimfn.mongodb.net/cleanBlog?retryWrites=true&w=majority')

//TEMPLATE ENGINE
app.set("view engine","ejs")


//MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))


//ROUTES
app.get('/',postController.getAllPosts)
app.get('/index',postController.getAllPosts)
app.get('/posts/:id', postController.getPost)
app.get('/edit/:id', postController.getEditPageForPost)

app.get('/about',(req,res) => {            // /about dizinine yapılan get request e cevap olarak about sayfası gönderilir
    res.render('about')
})

app.get('/add_post',(req,res) => {         // /add_post dizinine yapılan get request e cevap olarak
    res.render('add_post')
})




//-*************************

app.post('/blogs',postController.createPost)

//**************************

app.put('/posts/:id', postController.updatePost)

//*******************************
app.delete('/posts/:id', postController.deletePost)




const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server http://localhost:${port} adresinde başlatıldı..`)
})