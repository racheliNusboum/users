
let users=[]
// const {v4}  = require('uuid')
let id=1
class User{
    constructor(name,email,phone){
        // const id = v4()
        this.id = id++
        this.name = name
        this.email = email
        this.phone = phone
    }

}



const existUser = async (userName) => {    
    try {
        let response = await users.find((element)=>element.name===userName)
        
            
        return response===undefined?false:true
    } 
    catch (error) {
        throw error
    }
}

const createUser = async (user) => {
    const errorTypes={VALIDATION:422} 
     console.log(users);
    if (await existUser(user.name)) {
        const error = {
            message: `userName '${user.name}' is not available`,
            type: errorTypes.VALIDATION
        }
        throw error
    }
    try {
        if(users.length===0)
            users=[new User(user.name,user.email,user.phone)]
        else
            users.push(new User(user.name,user.email,user.phone));
        return user
    }
    catch (error) {
        throw error
    }
}


const updateUser = async (id,user) => {    
    try {
    
        if (await existUser(user.name)) {
                users = users.map(item => {
                    if (item.id === parseInt(id)) {
                        return { ...item, name: user.name,email:user.email,phone:user.phone};
                       
                    }
            return item;
    } )
    console.log(users)
    return user
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
        deleteUser,updateUser,createUser
    }
    