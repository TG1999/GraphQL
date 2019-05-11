const express=require('express')
const graphqlHTTP = require('express-graphql');
const app=express();
const schema=require('./schema').schema
const rootValue=require('./root')
app.use('/graphql',graphqlHTTP({
    schema,rootValue,graphiql:true
}))
app.listen(2000)