const express = require('express')

//Setup array to store my song data
const artistList = [];

//make a router 
//A router is like an mini-app
const router = express.Router();


//We can use `router` just like we use app
//the actual URL here is "/artist"
router.get('/', (req, res) => {
    console.log(`In /songs GET`);
    res.send(songList);
});

router.get('/first', (req, res) => {
    songList.push(req.body);
    res.send(artistList);
})

router.post('/', (req, res) => {
    songList.push(req.body);
    res.sendStatus(201);
});

//exports out song to "mini app"
module.exports = router;