import mongoose,{ Schema, model } from 'mongoose';

const UserSchema = new Schema({
	full_name: {
		type: String,
		required: [true, 'please enter your full name']
	},
	email: {
		type: String,
		required: [true, 'please enter your email']
	},
	password: {
		type: String,
		required: [true, 'please enter your password']
	},
	}, { timestamps: true });
	
	const User = model('users', UserSchema);
	export default User;