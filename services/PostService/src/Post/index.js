
import queryResolvers from './queryResolvers';
import mutationResolvers from './mutationresolvers';
import PostTypes from './Types';
import { gql } from 'apollo-server';

export const postTypeDefs = gql`

${PostTypes}
extend type Query {
    fetchPostById(request : fetchPostByIdInput) : fetchPostByIdResponse
    fetchPostByUserId(request : fetchPostByUserIdInput) : fetchPostByUserResponse
}

extend type Mutation {
    createPost(request: createPostInput) : createPostResponse
    updatePost(request: updatePostInput) : updatePostResponse
}

`


export const postResolvers = {

    Query:{
        ...queryResolvers
    },
    Mutation: {
        ...mutationResolvers
    }

}