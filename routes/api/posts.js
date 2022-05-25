const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');
const multer  = require('multer')
const upload = multer(); // <- handles multipart/formdata requests(photos)
// /*---------- Public Routes ----------*/
router.post('/', upload.single('photo'), postsCtrl.createPost);
router.get('/', postsCtrl.postIndex)


/*---------- Protected Routes ----------*/
// function isAuthenticated(req, res, next){
//     console.log("made to routes")
//     if(req.user){
//         return next()
//     }else{
//         res.status(401).json({message: 'Not Authorized'})
//     }
// }
module.exports = router;


