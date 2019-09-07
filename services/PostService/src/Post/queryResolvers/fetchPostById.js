
import PostModel from '../Model';

export default async(parent,args,context) => {

    try {
        const postId = args.request.data.postId;

        const postCollection = await PostModel.getPostById(postId);

        return {
            success : true,
            data : postCollection,
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