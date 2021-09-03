const mongoose=require('mongoose');
const validator=require('validator');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:3
    },
    email:{
        type:String,
        require:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email');
            }
        }
    },
    phone:{
    
        type:Number,
        require:true,
        min:10
    },
    message:{
        type:String,
        require:true
       

    }
});

const User=mongoose.model("Project",userSchema);

module.exports=User;