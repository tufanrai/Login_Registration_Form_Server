import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './router/auth.router';
import { dbConfig } from './config/dbConfig';

// import ting the root url's from .env file
const PORT = process.env.PORT ?? 8000;
const uri = process.env.DB_URI ?? '';
const source = process.env.SOURCE ?? '';

// initialising app  
const app = express();

// connecting the server with database
dbConfig(uri);

// using middlewares
app.use(cors({
origin: source,
}));
app.use(express.urlencoded());
app.use(express.json());


// using the routes
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`server started on port: ${PORT}🚀`));