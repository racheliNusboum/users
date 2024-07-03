
let users=[]
const {v4}  = require('uuid')
class User{

    constructor(name,email,phone) {
        const id = v4()
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
    }

}



const existUser = async (userName) => {    
    try {
        const response = await users.find((element)=>element===userName)
        return response.length>0
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
        users.push(new User(user.name,user.email,user.phone));
        return user
    }
    catch (error) {
        throw error
    }
}


const upDate = async (id,user) => {    
    try {
    
        if (await existUser(user.name)) {
                users = array.map(item => {
                    if (item.id === id) {
                        return { ...item, name: user.name,email:user.email,phone:user.phone};
                        
                    }
            return item;
    } )
}
else{
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


   
    const deleteUser = async (id) =>{

        try {
                const tempArray= array.filter(item => item.id !== id);
                if(tempArray.length!=users.length){
                   users=tempArray
                }     
    else{
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
    module.exports = {
        deleteUser,upDate,createUser,existUser
    }
    