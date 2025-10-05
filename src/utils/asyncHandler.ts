import { Request, Response, NextFunction, RequestHandler } from 'express';

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

// async handler function
export const asyncHandler = (fun: Handler) : RequestHandler => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fun(req,res,next)).catch(err => next(err));
	};
};