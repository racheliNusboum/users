const express = require('express');
const router = express.Router();
const userController = require('./Controler/UserControler');

router.delete('/deleteUSer/:userId',userController.deleteUserByID);
router.post('/addUser',express.json(), userController.createNewUser);
router.put('/updateUser/:userId',express.json(), userController.updateUserById);

module.exports = router;