const { Router } = require('express');
const {getStores} = require('../controllers/search.controller');


const router = Router();

router.get('/stores', getStores);



module.exports = router;