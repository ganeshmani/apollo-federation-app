
import CommentModel from '../Model';
export default async(parent,args,context) => {

    try{
        const commentInfo = args.request.data;

        await CommentModel.insertComment(commentInfo);

        return {
            success : true,
            error : null
        }

    }
    catch(e){
        console.log(e);

        return {
            success : false,
            error : {
                status : 500,
                message : e
            }
        }

    }


}