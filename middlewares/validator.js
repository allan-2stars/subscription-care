const Joi = require('joi');

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
