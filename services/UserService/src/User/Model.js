import Mongoose from 'mongoose';

const userSchema = new Mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
},{timestamps : true})

class User {

    static getAllUser(){

        return this.find({}).exec();
    }

    static getUserById(id) {

        return this.findOne({
            _id : Mongoose.mongo.ObjectID(id)
        }).exec();
    }

    static insertUser(userInfo) {

        const user = this(userInfo);

        return user.save();
    }


    static updateUser(userId,userInfo){

        return this.updateOne({
            _id : Mongoose.mongo.ObjectID(userId)
        },{
            $set : userInfo
        }).exec();

    }

}

userSchema.loadClass(User);

export default Mongoose.model('User',userSchema)