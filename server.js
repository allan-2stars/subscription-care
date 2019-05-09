const express = require('express');
const dotenv = require('dotenv');
const Middleware = require('./middlewares/middleware');
const ErrorHandlingMiddleware = require('./middlewares/error-handling');

dotenv.config();

const app = express();
const PlansController = require('./controllers/plans');
const SubscriptionsController = require('./controllers/subscriptions');

// import all the middlewares
Middleware(app);

app.use('/api/plans', PlansController);
app.use('/api/subscriptions', SubscriptionsController);

// Error middleware must ber defined after all other middleware/routes
ErrorHandlingMiddleware(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
