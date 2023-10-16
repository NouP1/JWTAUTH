const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req,res,next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnautharizedError());
        }
        const accessToken = authorizationHeader.split(' ')[1];
        if(!accessToken) {
            return next(ApiError.UnautharizedError());
        }
        const userData = tokenService.validateAccessToken(accessToken);
        if(!userData) {
            return next(ApiError.UnautharizedError());
        }

        req.user = userData;
        next();
    } catch(e) {
        return next(ApiError.UnautharizedError());
        
    }
};