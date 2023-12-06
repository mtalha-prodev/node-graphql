import express from 'express';

export const app = express();

import { graphqlHTTP } from "express-graphql"

import { graphqlSchema } from './src/graphql/shema.js';
import Users from './src/models/user.js';


let root = {
    ip: '127.0.0.1',
    // add model schema
    Users: Users
}

const context = async (req, res) => {
    const host = req.headers.host
    const token = 'kfjkajfkaj'
    return { host, token }
}

// using graphql
app.use('/graphql', graphqlHTTP(async (req, res) => ({
    // schema: graphqlSchema,
    // // pass db connection to server
    // rootValue: root,
    // graphiql: true,

    schema: graphqlSchema,
    // pass db connection to server
    rootValue: root,
    // context check authorization token and headers etc
    graphiql: true,
    context: () => context(req),
})));