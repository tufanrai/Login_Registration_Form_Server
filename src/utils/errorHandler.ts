class errorHandler extends Error {
	statusCode : number;
	status: 'success' | 'fail' | 'error';
	success: boolean 
	
	constructor (message: string, statusCode: number) {
		super(message) 
        this.statusCode = statusCode
        this.status = statusCode >= 400 && statusCode < 500? 'fail' : 'error'
        this.success = false

        Error.captureStackTrace(this, errorHandler)
	};
};

export default errorHandler;