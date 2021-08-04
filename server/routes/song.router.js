const express = require('express')

//make a router 
//A router is like an mini-app
const router = express.Router();


//We can use `router` just like we use app
router.get('/song', (req, res) => {
    console.log(`In /songs GET`);
    res.send(songList);
});

router.post('/song', (req, res) => {
    songList.push(req.body);
    res.sendStatus(201);
});

//exports out song to "mini app"
module.exports = router;