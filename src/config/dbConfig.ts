import mongoose from 'mongoose';

// function that connects server with the database. 
export const dbConfig = (uri: string) => {
	mongoose.connect(uri)
	.then(() => console.log('server connected to database successfuly'))
	.catch(err => console.log(err))
};
          