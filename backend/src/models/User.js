import mongoose from "mongoose";

const userSchema =  new mongoose.Schema(
    {
        name : {
            type : String ,
            required : true,
        },
        email : {
            type: String,
            required : true ,
            unique :true
        },
        profileImage : {
            type :String ,
            default :  " " ,
        },
        clearkId: {
            type : String ,
            required :true,
            unique : true,
        },
        
    } , { timestamps: ture} //createdat , updatedAt
)
const User = mongoose.model("User", userSchema);