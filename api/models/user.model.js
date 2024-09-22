import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
            type: String,
            required: true,
            unique: true,
    }, 
    email:{
            type: String,
            required: true,
            unique: true,
    },
    password:{
            type: String,
            required: true,
    },
    avatar:{
        type: String,
        default:"https://imgs.search.brave.com/AEimW3wAf5jYoyb_U0haUu1SARXv6oPDctAkg5U05YY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/MC8wNS8yMi8zNy9i/bGFuay1wcm9maWxl/LXBpY3R1cmUtOTcz/NDYwXzEyODAucG5n"
    },
    
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);
export default User;