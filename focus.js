const express = require('express')
const router = express.Router()


//gets the focus page
router.get('/focus', (req,res) => {
  res.send('focus')
})

//gets the focus page and an id
router.get('/focus/:id', (req,res) => {
  res.send('focus with id')
})


module.exports = router