
import Mongoose from 'mongoose';

const postSchema = new Mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true
    }
},{ timestamps : true });

class Post {

    static getPostById(id){
        return this.findOne({
            _id : Mongoose.mongo.ObjectID(id)
        }).exec();
    }

    static getPostByUserId(userId) {

        return this.find({
            userId
        }).exec();
    }

    static createPost(postInfo) {

        const post = this(postInfo);

        return post.save();
    }

    static updatePost(postId,postInfo){

        return this.updateOne({
            _id : Mongoose.mongo.ObjectID(postId)
        },{
            $set : postInfo
        }).exec();

    }


}

postSchema.loadClass(Post);

export default Mongoose.model('Post',postSchema);