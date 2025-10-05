import jwt from 'jsonwebtoken';
import { IPayload } from '../interface/AuthInterface';
export declare const generateToken: (data: IPayload) => string;
export declare const verifyToken: (token: string) => jwt.JwtPayload;
//# sourceMappingURL=jwt.utils.d.ts.map