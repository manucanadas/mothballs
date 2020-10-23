const express = require('express')
const hbs = require('express-handlebars')
const homeRoute = require('./homeRoute')
const edit = require('./edit')
const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

//routes
server.use('/',homeRoute)
server.use('/',edit)


module.exports = server
