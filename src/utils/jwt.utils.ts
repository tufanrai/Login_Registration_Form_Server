import jwt from 'jsonwebtoken';
import { IPayload } from '../interface/AuthInterface';

const jwtSecretKey = process.env.JWT_SECRET_KEY ?? 'Shhh'; // This is the secret key which is used for token generation and decoding of token
const jwtExpiryDate = process.env.JWT_EXPIRY_DATE ?? '30d'; // This is the expiry date of the token, when the token exceds this time the generated token won't work so that for new token user have to login again.

// token generator function
export const generateToken = (data: IPayload) => {
	const token = jwt.sign(data, jwtSecretKey, { expiresIn: jwtExpiryDate as any });
	return token;
};

// verify token 
export const verifyToken = (token: string) => {
	return jwt.verify(token, jwtSecretKey) as jwt.JwtPayload;
};