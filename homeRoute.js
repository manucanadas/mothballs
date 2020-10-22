const express = require('express')
const router = express.Router()


//gets the '/' page and redirects to home
router.get('/', (req,res) => {
  res.redirect('home')
})


//gets the /home page
router.get('/home', (req,res) => {
    res.render('./home')
})

module.exports = router