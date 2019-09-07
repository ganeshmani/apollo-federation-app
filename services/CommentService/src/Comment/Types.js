export default `

input fetchCommentByPostInputData {
    postId : String!
}

input fetchCommentByPostInput {
    data : fetchCommentByPostInputData
}

 input updateCommentInputData {
     commentId : String!
     description : String!
 }   

 input updateCommentInput {
     data : updateCommentInputData
 }

 input postCommentInputData {
     postId : String!
     userId : String!
     description : String!
 }   

 input postCommentInput {
     data : postCommentInputData
 }

 type fetchCommentByPostResponse {
     success : Boolean
     data : [Comment!]
     error : Error
 }

 type postCommentResponse {
     success : Boolean
     error : Error
 }

 type updateCommentResponse {
     success : Boolean
     error : Error
 }

`