const graphql=require('graphql')
const schemabuilder=graphql.buildSchema
var schema=schemabuilder(`
type Obj{
    name:String
    time:String
}
type User{
    firstName:String!
    lastName:String!
    emails:String
    id:ID
}
input UserInput{
    id:ID
    firstName:String!
    lastName:String!
    emails:String
}
type Query{
    item : Obj
    user:User
}
type Mutation{
    createUser(input:UserInput): User
}
`)
module.exports={
    schema
}