const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const Middleware = require('./middlewares/middleware');
const PORT = process.env.PORT || 5000;

const app = express();
const PlansController = require('./controllers/plans');
const SubscriptionsController = require('./controllers/subscriptions');

// import all the middlewares
Middleware(app);

app.use('/api/plans', PlansController);
app.use('/api/subscriptions', SubscriptionsController);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
