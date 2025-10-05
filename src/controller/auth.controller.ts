import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import errorHandler from '../utils/errorHandler';
import User from '../model/user.model';
import { hashPassword, verifyPassword } from '../utils/bcryptjs.utils';
import { generateToken } from '../utils/jwt.utils';


// register new user 
export const newRegister = asyncHandler( async (req: Request, res: Response) => {
	const {password, ...data} = req.body; // we receive the datas from body of request
	
	if(!data) { // returns error if all the required datas are not filled
		throw new errorHandler('please enter all the required details', 406);
	};
	
	const hashedPassword = await hashPassword(password); // the function returns hashed password
	
	if(!hashedPassword) { // If any problem occures while returning hashed password throws an error
		throw new errorHandler('something went wrong, please try again', 500);
	};
	
	const user = await User.create({ password: hashedPassword, ...data}); // creats new user data on the database storing all the user input data and hashed password insted of the actual password
	
	res.status(200).json({ // returns a success response to the client 
		message: 'user successfuly registered', 
		data: user,
		status: 'success',
		success: true,
	});
});

// login user 
export const loginUser = asyncHandler( async (req: Request, res: Response) => {
	const { email, password } = req.body; // receiving email and password from the body of request
	
	if(!email){ // throws an error if email is not typed
		throw new errorHandler('please enter your email', 406);
	};
	if(!password) { // throws an error if password is not typed
		throw new errorHandler('please enter your password', 406);
	};
	
	const user = await User.findOne({email}); // finds user from the database using typed email
	
	
    if(!user) {
        throw new errorHandler('user not found', 404);
    }
	
    const verifiedPassword = verifyPassword(password, user.password); // checks for the password and returns boolean value
    
	if(!verifiedPassword) { // if the password is false, returns an error
		 throw new errorHandler('either password or email is incorrect', 406);
	};
	
	const accessToken = generateToken({ // this function generats JSON web token for easy access
		full_name: user.full_name,
		email: user.email,
		password: user.password
	});
	
	if(! accessToken) { // if any problem comes while token generation throws an error 
		throw new errorHandler('something went wrong please try again, 500', 404);
	};
	
	res.status(200).json({ // sends success response along with the access token
		message: 'user successfuly loged in',
		data: user,
		status: 'success',
		success: true,
		accessToken,
	});
});
          