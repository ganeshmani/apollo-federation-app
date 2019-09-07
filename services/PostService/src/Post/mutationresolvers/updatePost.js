
import PostModel from '../Model';

export default async(parent,args,context) => {

    try {
        const postId = args.request.data.postId;

        const postInfo = args.request.data;

        await PostModel.updatePost(postId,postInfo);

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