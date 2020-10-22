const express = require('express')
const router = express.Router()
const fs = require('fs')

//gets the focus page and an id
router.get('/addMothball', (req,res) => {
  
  res.render('edit')

})

router.post('/addMothball', (req,res) => {
  
  //reads json file
  fs.readFile('./data.json', 'utf-8', (err,data) => {
    data = JSON.parse(data)


    // find the next number in the array we crete a new object at that postion using the form inputs
     data.websites[data.websites.length] = {
       id: data.websites.length +1,
       name: req.body.name,
       product: req.body.product,
       url: req.body.url

      }

    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
      
    })
    
    
  })

})


module.exports = router