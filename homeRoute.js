const express = require('express')
const router = express.Router()
const fs = require('fs')

//gets the '/' page and redirects to home
router.get('/', (req,res) => {
  res.redirect('home')
})


//gets the /home page
router.get('/home', (req,res) => {

//reads json file
  fs.readFile('./data.json', 'utf-8', (err,data) => {
    data = JSON.parse(data)

    let sites = {websites:[]}
    
    //pushes 9 of the websites.length to sites
    for(i=0; i<9; i++){
      sites.websites.push(data.websites[Math.floor(Math.random() * data.websites.length)])
    }

    
    //redner home page with 9 random sites
    res.render('home',sites)

  })

})

module.exports = router