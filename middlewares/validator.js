const Joi = require('@hapi/joi');

const Subscription = require('../models/subscription');
const Plan = require('../models/plan');

('use strict');

let validators = {
    Subscription: {
        scopes: {
            default: Subscription.SubscriptionValidationSchema
        }
    },
    Plan: {
        scopes: {
            default: Plan.PlanValidationSchema
        }
    }
};

const scopeExists = (validator, scope) => {
    // if found the scope, return true
    return Object.keys(validator.scope).find(key => key === scope) != undefined;
};

//
const getSchema = (model, scope) => {
    // the model is validators key, like "Subscription", "Plan"
    let validator = validators[model];
    if (!validator) {
        throw new Error('Validator does not exist');
    }

    // first check, if the given validator has multiple scopes
    if (validator.scopes) {
        // if the caller has passed a value for 'scope'
        if (scope) {
            if (!scopeExists(validator, scope)) {
                throw new Error(
                    `Scope ${scope} does not exist in ${model} validator`
                );
            }
            return validator.scopes[scope];
        }
        return validator.scopes.default;
    }
    return validator;
};

const validate = (model, object, scope) => {
    return Joi.validate(object, getSchema(model, scope), {
        allowUnknown: true
    });
};

module.exports = function(model, scope) {
    return (req, res, next) => {
        const validationResult = validate(model, req.body, scope);
        if (validationResult.error) {
            throw new Error(validationResult.error.message);
        }
        next();
    };
};
