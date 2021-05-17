const { check } = require('express-validator');
const AppError = require('../../errors/appError');
const chargeService = require('../../services/chargeService');
const {validationResult} = require('../commons');
const { validJWT } = require('../auth');

const _method = check('method').not().isEmpty();
const _amount = check('amount').not().isEmpty();
const _description = check('description').not().isEmpty();
const _idRequired = check('id').not().isEmpty();
const _idExistCharge = check('id').custom(
    async (id = '') => {
        const chargeFound = await chargeService.findById(id);
        if(!chargeFound) {
            throw new AppError('The id does not exist in DB', 400);
        }
    }
);

const postRequestValidations = [

    _method,
    _amount,
    _description,
    validationResult
]
const getAllRequestValidation = [

]

const getRequestValidation = [

    _idRequired,  
    _idExistCharge,
    validationResult
]

module.exports = {
    postRequestValidations,
    getAllRequestValidation,
    getRequestValidation
}
