
const Joi = require("joi");

module.exports={
    addUserSchema:{
        body:Joi.object().required().keys({
        email:Joi.string().required().email().messages({
        "string.email":"sorry..please enter valid email",}),
        password:Joi.string().required(),
        role:Joi.string().required(),
    })
    },
    singInSchema: {
        body: Joi.object().required().keys({
          email: Joi.string().required().email(),
          password: Joi.string().required(),
        }),
      },
}


