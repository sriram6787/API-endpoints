
const express=require('express')
const app=express()
const port=3000
const users=[{id:1,userName:'Sriram',email:"sriram@gmail.com"},
               { id:2,userName:'ganesh',email:"ganesh@gmail.com"} ]
app.get('/user',(req,res)=>{
    res.send(users)

})
app.get('/user/:id',(req,res)=>{
const userId=parseInt(req.params.id);
const user=users.find(user=>user.id===userId)
if(user){
    res.send(user)
}else{
    res.status(404).send({message:'error'})
}
})
app.post('/user',(req,res)=>{
    const newUser=req.body
    users.push(newUser)
    res.status(201).send(newUser)

})
app.put('/user/;id',(req,res)=>{
    const userId=parseInt(req.params.id)
    const updateUser=req.body
    users=users.map(user=>(userId===user.id)?{...user,...updateUser}:user)
    res.send(users.find(user => user.id === userId));
})
app.delete('/user/:id',(req,res)=>{
    const userId =ParseInt(req.param.id)
    users=users.map(user=>user.id!==userId)
})
app.listen(port,()=>{
    console.log(`the port now running is ${port}`)
})