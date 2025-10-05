declare class errorHandler extends Error {
    statusCode: number;
    status: 'success' | 'fail' | 'error';
    success: boolean;
    constructor(message: string, statusCode: number);
}
export default errorHandler;
//# sourceMappingURL=errorHandler.d.ts.map