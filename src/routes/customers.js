const { Router } = require('express');
const {
    getAllCustomers, 
    createCustomer, 
    updateCustomer, 
    getById, 
    deleteCustomer,
    getAllStores
} = require('../controllers/customers.controller');
const { 
    postRequestValidations,
    putRequestValidations,
    getAllRequestValidation,
    getRequestValidation,
    deleteRequestValidations
} = require('../middlewares/customers');


const router = Router();

router.get('/', getAllRequestValidation, getAllCustomers);
router.post('/', postRequestValidations, createCustomer);
router.put('/:id', putRequestValidations, updateCustomer);
router.get('/:id', getRequestValidation, getById);
router.delete('/:id', deleteRequestValidations, deleteCustomer);
router.get('/stores', getAllStores);



module.exports = router;