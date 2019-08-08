const express = require('express')

// pull in Mongoose model for list-items
const ListItem = require('../models/list_item')

// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { list-item: { title: '', text: 'foo' } } -> { list-item: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', {
  session: false
})

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
router.get('/list-item', (req, res, next) => {
  ListItem.find()
    .then(list-items => {
      return list-items.map(list-item => list-item.toObject())
    })
    .then(list-items => {
      res.json({ list-items })
    })
    .catch(next)
})

// SHOW
router.get('/list-items/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  ListItem.findById(req.params.id)
    .then(handle404)
    .then(listItems => res.sendStatus(200).json({ listItems: listItems.toObject() }))
    .catch(next)
})

// CREATE
router.post('/list-items', requireToken, (req, res, next) => {
  req.body.listItem.owner = req.user.id

  ListItem.create(req.body.listItem)
    .then(listItem => {
      res.status(201).json({ listItem: listItem.toObject() })
    })
    .catch(next)
})

// UPDATE
router.patch('/list-items/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.listItem.owner
  ListItem.findById(req.params.id)
    .then(handle404)
    .then(list-item => {
      requireOwnership(req, list-item)
      return list-item.update(req.body.list-item)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})


// DESTROY
router.delete('/list-items/:id', requireToken, (req, res, next) => {
  ListItem.findById(req.params.id)
    .then(handle404)
    .then(list-item => {
      requireOwnership(req, list-item)
      list-item.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})


module.exports = router
