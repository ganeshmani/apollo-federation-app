
import CommentTypes from './Types';
import queryResolvers from './queryResolvers';
import mutationResolvers from './mutationResolvers';


export const commentTypeDefs = `

    ${CommentTypes}

    extend type Query {
        fetchCommentByPost(request : fetchCommentByPostInput) : fetchCommentByPostResponse
    }

    extend type Mutation {
        postComment(request: postCommentInput) : postCommentResponse
        updateComment(request : updateCommentInput) : updateCommentResponse
    }
`

export const commentResolvers = {
    Query: {
        ...queryResolvers
    },
    Mutation : {
        ...mutationResolvers
    }
}