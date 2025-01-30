export declare type HTTPResponse = {status: number, message: String};

/* Status 200 */
export const SUCCESS = (str: String = "Success") => {return {status: 200, message: str}};


/* Status 400-499 */
export const BAD_REQUEST = (str: String = "Bad Request") =>  { return {status: 400, message: str}};
export const CONFLICT = (str: String = "There was a conflict.") => { return {status: 409, message: str}};


/* Status 500 */
export const INTERNAL_SERVER_ERROR = (str: String = "Internal Server Error") => {return {status: 500, message: str}};
export const NOT_IMPLEMENTED = {status: 501, message: "Not Implemented"};
export const BAD_GATEWAY = {status: 502, message: "Bad Gateway"};
export const SERVICE_UNAVAILABLE = {status: 503, message: "Service Unavailable"};
export const GATEWAY_TIMEOUT = {status: 504, message: "Gateway Timeout"};
export const INSUFFICIENT_STORAGE = {status: 507, message: "Insufficient Storage"};