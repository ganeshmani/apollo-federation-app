
import Mongoose from 'mongoose';

const commentSchema = new Mongoose.Schema({
    postId : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
},{ timestamps : true });

class Comment {

    static getCommentById(id){
        return this.findOne({
            _id : Mongoose.mongo.ObjectID(id)
        }).exec();

    }

    static getCommentByPost(postId){

        return this.find({
            postId
        }).exec();
    }

    static getCommentByUser(userId) {

        return this.find({
            userId
        }).exec();

    }

    static insertComment(commentInfo) {

        const comment = this(commentInfo);

        return comment.save();
    }

    static updateComment(commentId,description) {

        return this.updateOne({
            _id : Mongoose.mongo.ObjectID(commentId)
        },{
            $set : {
                description
            }
        }).exec();
    }


}

commentSchema.loadClass(Comment);

export default Mongoose.model('Comment',commentSchema);

