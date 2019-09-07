
import CommentTypes from './Types';
import queryResolvers from './queryResolvers';
import mutationResolvers from './mutationResolvers';


export const commentTypeDefs = `

    ${CommentTypes}

    extend Type Query {
        chec : String
    }

    extend Type Mutation {
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