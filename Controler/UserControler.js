const { createUser, deleteUser, updateUser } = require('../modules/user');
const createNewUser =async(req, res) => {
    try {
       if(req.body.phone===undefined||req.body.name===undefined||req.body.email===undefined){
        return res.status(400).json({ errors: [{ msg: 'Please fill in all the required fields' }] });
       }
        const newUser = await createUser(req.body)
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
        if(req.body.phone===undefined||req.body.name===undefined||req.body.email===undefined){
            return res.status(400).json({ errors: [{ msg: 'Please fill in all the required fields' }] });
           }
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