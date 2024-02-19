const constats = require("../constants");

const errorHandler = (err,req,res,next) =>{

        const statusCode = res.statusCode?res.statusCode:500;
        //console.log(constats.VALIDATION_ERROR);
        switch (statusCode) {
            case constats.VALIDATION_ERROR://400
                res.json({title:"Validation Failed", 
                message: err.message , 
                stackTrace: err.stackTrace
                });
                break;
            case constats.NOT_FOUND://404
                res.json({title :`Not found ${constats.NOT_FOUND}`, 
                message : err.message , 
                stackTrace : err.stackTrace
                });
                break;
            case constats.UNAUTHORIZED://401
                res.json({title :"UNAUTHORIZED", 
                message : err.message , 
                stackTrace : err.stackTrace
                });
                break;
            case constats.FORBIDDEN://403
                res.json({title :"FORBIDDEN", 
                message : err.message , 
                stackTrace : err.stackTrace
                });
                break;
            case constats.SERVER_ERROR://500
                res.json({title :`Server Error : ${constants.SERVER_ERROR}`, 
                message : err.message , 
                stackTrace : err.stackTrace
                });
                break;
            default:
                console.log("No error ! all good !");
                break;
        }
        
        
};

module.exports = errorHandler;