const express = require('express');
const router = express.Router();
const dislikesCtrl = require('../../controllers/dislikes')

router.post('/posts/:id/likes', dislikesCtrl.createDislike)
router.delete('/likes/:id', dislikesCtrl.deleteDislike)

module.exports = router;