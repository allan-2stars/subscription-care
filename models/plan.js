const Joi = require('@hapi/joi');

const PlanValidationSchema = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number()
        .positive()
        .allow(0)
        .required(),
    type: Joi.string()
        .valid('month', 'year')
        .required(),
    userId: Joi.number()
        .positive()
        .required()
});

module.exports = PlanValidationSchema;
