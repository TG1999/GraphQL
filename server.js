const express=require('express')
const graphqlHTTP = require('express-graphql');
const app=express();
const schema=require('./schema').schema
app.get('/',(req,res)=>{
    res.send('Route is working fine')
})
users=[];
root={
    item:()=>{
        return{
        name:'ABC',
        time:'12:32:11'
        }   
    },
    user:()=>{
        return{
            firstName:'Tushar',
            lastName:'Goel',
            emails:[{
                email:'tush@goel.com'
            },
            {
                email:'tush@goel2.com'
            }]
        }
    },
    createUser:({input})=>{
        users.push(input)
        return input
    }
}
app.use('/graphql',graphqlHTTP({
    schema,rootValue:root,graphiql:true
}))
app.listen(2000)