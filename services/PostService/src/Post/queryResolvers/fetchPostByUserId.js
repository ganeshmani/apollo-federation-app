import PostModel from '../Model';
export default async(parent,args,context) => {

    try {
        const userId = args.request.data.userId;

        const postCollection = await PostModel.getPostByUserId(userId);

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