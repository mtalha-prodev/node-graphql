import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import { USER_LIST, SINGLE_USER } from './queries/user.js';
import { CREATE_USER, DELETE_USER, UPDATE_USER } from './mutations/user.js';



// get data types from schema  read from database 
const RootQuery = new GraphQLObjectType({
    name: 'root',
    fields: {
        // get all user
        userList: USER_LIST,
        // get single user
        singleUser: SINGLE_USER,
    }
})

// ADD data types from schema  read from database 
const RootMutation = new GraphQLObjectType({
    name: 'mutation',
    fields: {
        // create user
        createUser: CREATE_USER,
        // single update user
        updateUser: UPDATE_USER,
        // single delete user
        deleteUser: DELETE_USER,
    }
})


export const graphqlSchema = new GraphQLSchema({ query: RootQuery, mutation: RootMutation })