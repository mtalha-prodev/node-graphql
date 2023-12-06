import express from 'express';
import { config } from 'dotenv';
import { database } from './src/config/db.js';
config()

database()

// const app = express();

// import { graphqlHTTP } from "express-graphql"

// import { graphqlSchema } from './src/graphql/shema.js';

import { app } from './app.js';

app.use(express.json());



app.listen(3500, () => console.log('listening on port http://localhost:3500'))

