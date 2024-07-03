// const express = require('express');
// const router = express.Router()
// const { User } = require('../module/users')
const { createUser, deleteUser, updateUser } = require('../module/users');
const createNewUser =(req, res) => {
    try {
        // const user = new User(req.body.name,req.body.email,req.body.phone)
        // const user=req.body;
        const newUser =  createUser(req.body)
        res.status(201).json(newUser)
    }
    catch (error) {
        console.log({ error });
        if (error.type) {
            res.status(error.type).send(error.message)
        }
        else {
            res.status(500).send(error.message);
        }
    }
}

const deleteUserByID = (req, res) => {
    try {
        const { userId } = req.params.userId;
        deleteUser(userId)
        res.status(200).send(`User with ID ${userId} has been deleted`)

    }
    catch (error) {
        console.log({ error });
        if (error.type) {
            res.status(error.type).send(error.message)
        }
        else {
            res.status(500).send(error.message);
        }
    }
}
const updateUserById =  (req, res) => {
    try {
        const { userId } = req.params;
        const user = req.body;
        const userUpdated =  updateUser(userId, user)
        res.status(201).json(userUpdated)
    }
    catch (error) {
        console.log({ error });
        if (error.type) {
            res.status(error.type).send(error.message)
        }
        else {
            res.status(500).send(error.message);
        }
    }
}

module.exports = {
    updateUserById,deleteUserByID,createNewUser
  };