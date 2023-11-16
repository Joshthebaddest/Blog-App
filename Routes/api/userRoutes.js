const router = require('express').Router();
const [homeContent, aboutUsContent, contactUsContent] = require('../model/contents');
const blogPost = require('../model/post');

router.get('/', (req, res)=>{
    res.render('home', {homeContent, blogPost});
});
router.get('/about-us', (req, res)=>{
    res.render('about', {aboutUsContent});
});
router.get('/contact-us', (req, res)=>{
    res.render('contact', {contactUsContent});
});

module.exports = router;