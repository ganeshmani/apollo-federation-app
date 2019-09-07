
import CommentModel from '../Model';
export default async(parent,args,context) => {

    try{
        const postId = args.request.data.postId;

        const commentCollection = await CommentModel.getCommentByPost(postId);

        return {
            success : true,
            data : commentCollection,
            error : null
        }

    }
    catch(e){
        console.log(e);

        return {
            success: false,
            error : {
                status : 500,
                message : e
            }
        }

    }


}