const chalk = require('chalk');
const ValidationError = require('../errors/errors').ValidationError;
const AuthenticationError = require('../errors/errors').AuthenticationError;
const AccessDeniedError = require('../errors/errors').AccessDeniedError;

const errorLogger = (err, req, res, next) => {
    if (err.message) {
        console.log(chalk.default.red(err.message));
    }
    if (err.stack) {
        console.log(chalk.default.red(err.message));
    }
    next(err);
};

const authenticationErrorHandler = (err, req, res, next) => {
    if (err instanceof AuthenticationError) {
        return res.sendStatus(401);
    }

    next(err);
};
const validationErrorHandler = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.sendStatus(400);
    }
    next(err);
};
const accessDeniedErrorHandler = (err, req, res, next) => {
    if (err instanceof AccessDeniedError) {
        return res.sendStatus(403);
    }
    next(err);
};
const genericErrorHandler = (err, req, res, next) => {
    res.sendStatus(500);
    next(err);
};

module.exports = function ErrorHandlingMiddleware(app) {
    app.use([
        errorLogger,
        authenticationErrorHandler,
        validationErrorHandler,
        accessDeniedErrorHandler,
        genericErrorHandler
    ]);
};
