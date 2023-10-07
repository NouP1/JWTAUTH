const ApiError = require('../exceptions/api-error');

module.exports = function (req,res,next) {
    try{

    }catch(e) {
        return next(ApiError.UnautharizedError());
        
    }
}