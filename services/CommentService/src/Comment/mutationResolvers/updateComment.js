
import CommentModel from '../Model';
export default async(parent,args,context) => {

    try {

        const commentId = args.request.data.commentId;
        const description = args.request.data.description;

        await CommentModel.updateComment(commentId,description);

        return {
            success : true,
            error : null
        }


    }
    catch(e){
        console.log(e);

        return {
            success: false,
            error :{
                status : 500,
                message : e
            }
        }

    }

}