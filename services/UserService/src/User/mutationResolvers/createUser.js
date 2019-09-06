import UserModel from '../Model';

export default async(parent,args,context) => {

    try {
        const name = args.request.data.name;
        const email = args.request.data.email;
        const userInfo = {
            name,
            email
        }

        await UserModel.insertUser(userInfo);

        return {
            success : true,
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