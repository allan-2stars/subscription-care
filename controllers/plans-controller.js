const router = require('express').Router;
const asyncWrapper = require('../utils/async-wrapper').AsyncWrapper;

//GET api/plans
router.get(
    '/',
    asyncWrapper((req, res) => {
        //
    })
);

//GET api/plans/:id
router.get(
    '/:id',
    asyncWrapper((req, res) => {
        //
    })
);

//POST api/plans
router.post(
    '/',
    asyncWrapper((req, res) => {
        //
    })
);

//DELETE api/plans/:id
router.delete(
    '/:id',
    asyncWrapper((req, res) => {
        //
    })
);

module.exports = router;
