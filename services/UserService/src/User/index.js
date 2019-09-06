import userTypes from './Types';

import mutationResolvers from './mutationResolvers';
import queryResolvers from './queryResolvers';

export const userTypeDefs =`
    ${userTypes}

    type Query{
        fetchUserById(request: fetchUserByIdInput) : fetchUserByIdResponse
        fetchAllUser : fetchAllUserResponse
    }

    type Mutation{
        createUser(request: createUserInput) : createUserResponse
    }
` 

export const userResolvers = {
    Query : {
        ...queryResolvers
    },
    Mutation : {
        ...mutationResolvers
    }
}