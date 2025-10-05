"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class errorHandler extends Error {
    statusCode;
    status;
    success;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
        this.success = false;
        Error.captureStackTrace(this, errorHandler);
    }
    ;
}
;
exports.default = errorHandler;
//# sourceMappingURL=errorHandler.js.map