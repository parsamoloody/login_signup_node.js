import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // auth information
  userAutInformation: {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  // display information
  displayInformation: {
    displayName: {type: String, default: "Unknown Name"}
  },
}, 
{ timestamps: true},


)

const User = mongoose.model('userlogin', userSchema);
export default User;
