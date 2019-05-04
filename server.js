const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
const PlansController = require('./controllers/plans-controller');

app.use('/api/plans', PlansController);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
