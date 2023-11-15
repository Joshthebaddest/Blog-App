const express = require('express');
const path = require('path')
const app = express();
const ejs = require('ejs');
const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const blogRoutes = require('./Routes/blogsRoutes');

// middleware
app.use(require('body-parser').urlencoded({extended: true}))
app.use(express.static('public/css'));

app.set('view engine', 'ejs');

// routes
app.use('/admin', adminRoutes);
app.use('/', userRoutes);
app.use('/blogs', blogRoutes);

const port = 3000;
app.listen(port , ()=>{
    console.log(`app listening at port ${port}`)
})

