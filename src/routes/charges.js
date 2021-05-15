const { Router } = require('express');
const {
    getAllCharges, 
    createUserCharge, 
    getUserChargeById,   
} = require('../controllers/charges.controller');
const { 
    postRequestValidations,
    getAllRequestValidation,
    getRequestValidation,
} = require('../middlewares/charges');


const router = Router();

router.get('/', getAllRequestValidation, getAllCharges);
router.post('/', postRequestValidations, createUserCharge);
router.get('/:id', getRequestValidation,  getUserChargeById);

module.exports = router;