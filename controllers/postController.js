const Post = require('../models/Post')

exports.getAllPosts = async (req,res) => {
    const posts = await Post.find({})
    res.render('index', {
        posts
    })
}

exports.getPost = async (req,res) => {
    const post = await Post.findById(req.params.id)
    res.render('post',{
        post
    })
}

exports.getEditPageForPost = async (req,res) => {
    const post = await Post.findById(req.params.id)
    res.render('edit', {
        post
    })

}

exports.createPost = (req,res) => {
    Post.create(req.body)
    res.redirect('/')
}

exports.updatePost = async (req,res) => {
    const post = await Post.findOne({_id: req.params.id })
    post.postTitle = req.body.postTitle
    post.postSubTitle = req.body.postSubTitle
    post.postMeta = req.body.postMeta
    post.save()
    res.redirect(`/posts/${req.params.id}`)
}

exports.deletePost = async (req,res) => {
    const posts = await Post.findByIdAndDelete({_id: req.params.id})
    res.redirect('/')
}