const express=require('express')
const cors=require('cors')
const user_router=require('./routing')
const http = require('http')
const app=express()
const { HOST, PORT } = process.env;

    app.listen(PORT || 5780, HOST || "127.0.0.1", () => {
    const server = http.createServer(app)
}).catch(error => {
    throw error
})

app.get('/',(req,res) => {
   res.status(200).json({message: 'server is open'})
})
app.use(cors({
   origin:'null'
}))

app.use('/user',user_router)