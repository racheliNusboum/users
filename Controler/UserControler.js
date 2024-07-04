const { createUser, deleteUser, updateUser } = require('../modules/user');
const validator = require('validator');

const createNewUser = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email || !validator.isEmail(email) || email.includes(' ')) {
            return res.status(400).send('Invalid email format');
        }
        
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.log({ error });
        
        if (error.type) {
            res.status(error.type).send(error.message);
        } else {
            res.status(500).send(error.message);
        }
    }
}

const deleteUserByID = async(req, res) => {
    try {
        const { userId } = req.params;
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