const router = require('express').Router();
const [homeContent, aboutUsContent, contactUsContent] = require('../model/contents');
const blogPost = require('../model/post');

router.get('/:blogpost', (req, res)=>{
    const post = req.params.blogpost.replace('-', ' ');
    const blog = blogPost.filter(b => b.title.toLowerCase() == post.toLowerCase());
    res.render('blog', {blog});
});

module.exports = router;