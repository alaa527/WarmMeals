const { StatusCodes, getReasonPhrase } = require("http-status-codes");
module.exports=(schema)=>{
return (req,res,next)=>{
    const validation=[];
    const validateRequest=schema.body.validate(req.body);
   
    if(validateRequest.error){
        validation.push(validateRequest.error.details[0].message) }
    if(validation.length){
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:`Validation: ${validation.join()}`,error: getReasonPhrase(StatusCodes.BAD_REQUEST)});   
    return;
    }
    else{
        next();
    }

}
}
