
import UserModel from '../Model';
export default async(parent,args,context) => {

    try {

        const userCollection = await UserModel.getAllUser();

        return {
            success : true,
            data : userCollection,
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