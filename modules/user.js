
let users = []
let idUser = 1
const errorTypes = { VALIDATION: 422 }

class User {

    constructor(name, email, phone) {

        this.id = idUser++
        this.name = name
        this.email = email
        this.phone = phone
    }

}
const existUser = async (userName) => {
    try {
        let response = await users.find((element) => element.name === userName)
        return response === undefined ? false : true
    }
    catch (error) {
        throw error
    }
}
const createUser = async (user) => {

    if (await existUser(user.name)) {

        const error = {
            message: `userName '${user.name}' is not available`,
            type: errorTypes.VALIDATION
        }
        throw error
    }
    try {
        const newUser = new User(user.name, user.email, user.phone)
        if (users.length === 0) {
            users = [newUser]
        }
        else {
            users.push(newUser);
        }
        return user
    }
    catch (error) {
        throw error
    }
}

const upDateUser = async (id, user) => {
    try {
        if (await existUser(user.name)) {
            users = users.map(item => {
                if (item.id === parseInt(id)) {
                    return { ...item, name: user.name, email: user.email, phone: user.phone };

                }
                return item;
            })
            return user
        }
        else {
            const error = {
                message: `userName '${user.name}' is not available`,
                type: errorTypes.VALIDATION
            }
            throw error
        }
    }
    catch (error) {
        throw error
    }
}
const deleteUser = async (id) => {
    try {
        const tempArray = users.filter(item => item.id !== parseInt(id));
        if (tempArray.length != users.length) {
            users = tempArray
        }
        else {
            const error = {
                message: `id '${id}' is not available`,
                type: errorTypes.VALIDATION
            }
            throw error
        }
    }
    catch (error) {
        throw error
    }
}
module.exports = {
    deleteUser, upDateUser, createUser
}
