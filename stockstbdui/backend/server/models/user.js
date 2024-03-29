import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
  name:{
            type: String,
            required: true,
        },
  email:{
            type: String,
            required: true,
        },
  password:{
            type: String,
            required: true,
        }
},
    {timestamps: true}
);

// Create and export your models
const User = mongoose.model('User', userSchema);

export { User };