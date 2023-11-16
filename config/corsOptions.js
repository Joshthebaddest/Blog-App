const whiteList = [
    'https://yourownsite.com',
    'http://127.0.0.1:5500',
    'http://localhost:5001'
]

const corsOption = {
    origin: (origin, callback)=>{
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOption;