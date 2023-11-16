const express = require('express');
const path = require('path')
const app = express();
const ejs = require('ejs');
const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const blogRoutes = require('./Routes/blogsRoutes');
const verifyJwt = require('./middleware/verifyJWT');
const cors = require('cors');


// middleware
app.use(require('body-parser').urlencoded({extended: true}))
app.use(express.static('public/css'));
app.use(cors(require('./config/corsOptions')));

app.set('view engine', 'ejs');

// routes
app.use('/', userRoutes);
app.use('/blogs', blogRoutes);

// protected routes
app.use(verifyJwt);
app.use('/admin', adminRoutes);


const port = 3000;
app.listen(port , ()=>{
    console.log(`app listening at port ${port}`)
})

