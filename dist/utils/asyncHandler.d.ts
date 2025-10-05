import { Request, Response, NextFunction, RequestHandler } from 'express';
type Handler = (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const asyncHandler: (fun: Handler) => RequestHandler;
export {};
//# sourceMappingURL=asyncHandler.d.ts.map