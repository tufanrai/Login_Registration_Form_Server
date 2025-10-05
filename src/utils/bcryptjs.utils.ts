import bcryptjs from 'bcrypt';

// hash password 
export const hashPassword = async (password: string) => {
	const Salt = await bcryptjs.genSalt(12); // you can generate salt of any number but usually number between 10 - 15 are prefered.
	const hashedPassword = bcryptjs.hash(password, Salt);
	return hashedPassword; // returns a hashed password
};

// verify password
export const verifyPassword = ( password: string, hash: string ) => {
	return bcryptjs.compare(password, hash); // returns a boolean value
};
          