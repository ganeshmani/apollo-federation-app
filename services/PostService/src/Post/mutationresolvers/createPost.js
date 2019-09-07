
import PostModel from '../Model';
export default async(parent,args,context) => {

    try{

        let postInfo = {
            name : args.request.data.name,
            userId : args.request.data.userId,
            description : args.request.data.description
        }

        await PostModel.createPost(postInfo);

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