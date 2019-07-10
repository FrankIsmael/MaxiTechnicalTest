const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const User = require('../models/user-model')

// POST => To create a new user
router.post('/users', (req, res, next) => {

    const email = req.body.email;

    User.findOne({ email }, (err, foundUser) => {
        if (err) {
            res.status(500).json({ message: "Email check went bad." });
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Email. taken. Register another one.' });
            return;
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            birthdate: req.body.birthdate,
            status: req.body.status,
            role: req.body.role,
            favorite_sports: req.body.favorite_sports
        })
            .then(response => {
                res.json(response)
            })
            .catch(err => {
                res.json(err)
            })
    })
})

// GET => To get all the users
router.get('/users', (req, res, next) => {
    User.find()
        .then(allTheUsers => {
            res.json(allTheUsers)
        })
        .catch(err => res.json(err))
})

// GET => To get an specific user
router.get('/users/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id not valid' })
        return
    }
    User.findById(req.params.id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.json(err)
        })
}
)

// PUT => to update a specific user
router.put('/users/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.json({
                message: `User with ${req.params.id} is updated succesfully
        `})
                .catch(err => res.json(err))
        })
})

// 
module.exports = router