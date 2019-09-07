import express from 'express';

import * as bodyParser from 'body-parser';
import {merge} from 'lodash';

import { ApolloServer,gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation'
import mongoose from 'mongoose';

import { userTypeDefs,userResolvers } from './User';

import UserModel from './User/Model';

const typeDefs = gql`
    type Error @key(fields: "status") @key(fields:"message"){
        status : Int
        message : String
    }

    type User @key(fields: "_id"){
        _id : ID
        name : String
        email : String
    }

    ${userTypeDefs}
`

const resolveRef = {
    User : {
        async __resolveReference(object) {
            return await UserModel.getUserById(object._id);
        }
    }
}

const resolvers = merge(
    resolveRef,
    userResolvers
    
)

const app = express();
require('dotenv').config();

const MONGO_DB = process.env.MONGO_DB;

mongoose.connect(`mongodb://localhost:27017/${MONGO_DB}`,{ useNewUrlParser : true })
    .then((res) => {

        const server = new ApolloServer({
            schema : buildFederatedSchema([
                {
                    typeDefs,
                    resolvers
                }
            ]),
            context : ({req,res,context}) => {
                return {
                    req,
                    res,
                    context
                }
            }
        })

        server.applyMiddleware({app});

        const PORT = process.env.PORT;

        app.listen(PORT,() => {
            console.log(`server is listening to port ${PORT}`);
        })

    })
    .catch((err) => {
        console.error(err);
    })