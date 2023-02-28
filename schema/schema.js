const graphql = require('graphql');
const _ = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
let books = [
    {id:'1', name: 'Alchemist', aurthor: 'Paulo Chaulo'},
    {id:'2', name: 'Sapians', aurthor: 'Harari'},
    {id:'3', name: '5 AM Club', aurthor: 'Robin Sharma'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type:GraphQLString}, 
        name:{type:GraphQLString},
        aurthor:{type:GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type:BookType,
            args: {id: {type:GraphQLString}},
            resolve(parent, args){
                //code to get data from db/other source
               return _.find(books,{id:args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})