const graphql=require('graphql')
const schemabuilder=graphql.buildSchema
var schema=schemabuilder(`
type Obj{
    name:String
    time:String
}
type Query{
    item : Obj
}
`)
module.exports={
    schema
}