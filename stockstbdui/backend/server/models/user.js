/*
*   user.js
*   Jagroop Singh
*   Date Created: 3/27/2024
*   This defines the schema that will be used within the database that stores our user information.
*/
import mongoose, {Schema, models} from "mongoose";
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
//exports the schema depending on whether or not it was already defined within the mongoose models  
const User = models.User || mongoose.model("User", userSchema);
export default User;