import express from 'express';

import * as bodyParser from 'body-parser';
import {merge} from 'lodash';

import { ApolloServer,gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation'
import mongoose from 'mongoose';

import { commentTypeDefs,commentResolvers } from './Comment';
import CommentModel from './Comment/Model';

const typeDefs = gql`

    extend type Error @key(fields: "status") @key(fields: "message") {
        message: String @external
        status: Int @external
    } 

    extend type Post @key(fields: "_id"){
        _id : ID @external
        comments : [ Comment! ]
    }

    extend type User @key(fields: "_id"){
        _id : ID @external
        name : String @external
        email : String @external
    }
    

    type Comment {
        _id : ID
        postId : String!
        user : User @provides(fields : "name") @provides(fields: "email")
        description : String!
    }

    ${commentTypeDefs}
`
const resolveReferences = {
    Comment : {
        user(comment) {
            return { __typename: "User",_id : comment.userId }
        }
    },
    Post : {
        async comments(post) {
            return await CommentModel.getCommentByPost(post._id);
        }
    }
}

const resolvers = merge(
    resolveReferences,
    commentResolvers
)

const app = express();
require('dotenv').config();

const MONGO_DB = process.env.MONGO_DB;

mongoose.connect(`mongodb://localhost:27017/${MONGO_DB}`,{ useNewUrlParser : true })
    .then((res) => {
        console.log("mongoose connected successfully");
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