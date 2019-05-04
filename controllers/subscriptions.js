const router = require('express').Router();
const asyncWrapper = require('../utils/async-wrapper').AsyncWrapper;
const SubscriptionsService = require('../services/subscriptions');

const subscriptionsService = new SubscriptionsService();

//GET api/Subscriptions
router.get(
    '/',
    asyncWrapper(async (req, res) => {
        //
        let userId = null;
        let Subscriptions = await subscriptionsService.findAll(userId);
        res.send(Subscriptions);
    })
);

//GET api/Subscriptions/:id
router.get(
    '/:id',
    asyncWrapper(async (req, res) => {
        //
        let id = req.params.id;
        let userId = null;
        let plan = await subscriptionsService.findOne(id);
        res.send(plan);
    })
);

//POST api/Subscriptions
router.post(
    '/',
    asyncWrapper(async (req, res) => {
        //
        let plan = await subscriptionsService.create(req.body);
        res.send(plan);
    })
);

//DELETE api/Subscriptions/:id
router.delete(
    '/:id',
    asyncWrapper(async (req, res) => {
        //
        let id = req.params.id;
        await subscriptionsService.deleteOne(id);
        res.sendStatus(200);
    })
);

module.exports = router;
