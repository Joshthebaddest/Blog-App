const router = require('express').Router();
const blogPost = require('../model/post');


// router.get('/', (req, res)=>{
//     res.render('home', {homeContent});
// });
// router.get('/dashboard', (req, res)=>{
//     res.render('about', {aboutUsContent});
// });
router.route('/compose')
    .get((req, res)=>{
        const { headertext, bodytext } = (req.body);
        console.log(`headertext is ${headertext} and bodytext is ${bodytext}`)
        res.render('compose');
    })
    .post((req, res)=>{
        const { title, post } = (req.body);
        const link_title = title.replace(' ', '-');
        const posts = {title, post, link_title};
        blogPost.push(posts);
        res.redirect('/');
    });

module.exports = router;