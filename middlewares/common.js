const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(morgan('common'));
    app.use(helmet());
    app.use(cors());
};
