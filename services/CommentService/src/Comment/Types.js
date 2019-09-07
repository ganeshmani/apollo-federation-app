export default `

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

 type postCommentResponse {
     success : Boolean
     error : Error
 }

 type updateCommentResponse {
     success : Boolean
     error : Error
 }

`