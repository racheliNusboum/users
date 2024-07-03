// const express = require('express');
// const router = express.Router()
// const { User } = require('../module/users')
const { createUser, deleteUser, updateUser } = require('../modules/user');
const createNewUser =async(req, res) => {
    try {
        // const user = new User(req.body.name,req.body.email,req.body.phone)
        // const user=req.body;
       
        const newUser = await createUser(req.body)
        console.log(newUser);
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

const deleteUserByID = async(req, res) => {
    try {
        const { userId } = req.params.userId;
       await deleteUser(userId)
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
const updateUserById =  async(req, res) => {
    try {
        const { userId } = req.params;
        const user = req.body;
        const userUpdated =await  updateUser(userId, user)
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