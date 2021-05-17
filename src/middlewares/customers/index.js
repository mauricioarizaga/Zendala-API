const { check } = require('express-validator');
const AppError = require('../../errors/appError');
const customerService = require('../../services/customerService');
const { ROLES, ADMIN_ROLE } = require('../../constants');
const {validationResult} = require('../commons');
const { validJWT, hasRole } = require('../auth');

const _nameRequired = check('name', 'Name required').not().isEmpty();
const _emailRequired = check('email', 'Email required').not().isEmpty();
const _emailValid = check('email', 'Email is invalid').isEmail();
const _emailExist = check('email').custom(
    async (email = '') => {
        const customerFound = await customerService.findByEmail(email);
        if(customerFound) {
            throw new AppError('Email already exist in DB', 400);
        }
    }
);

const _roleValid = check('role').optional().custom(
    async (role = '') => {
        if(!ROLES.includes(role)) {
            throw new AppError('Invalid Role', 400);
        }
    }
);

const _idRequied = check('id').not().isEmpty();
const _idExist = check('id').custom(
    async (id = '') => {
        const customerFound = await customerService.findById(id);
        if(!customerFound) {
            throw new AppError('The id does not exist in DB', 400);
        }
    }
);



const postRequestValidations = [
    validJWT,
    hasRole(ADMIN_ROLE), 
    _nameRequired,
    _emailRequired,
    _emailValid,
    _emailExist,
    _roleValid,
    validationResult
]

const putRequestValidations = [
     validJWT,
    hasRole(ADMIN_ROLE),
   _idRequied,
    _idExist,
    _roleValid, 
    validationResult
]

const deleteRequestValidations = [
    validJWT,
    hasRole(ADMIN_ROLE), 
    _idRequied,

    _idExist,
    validationResult
]

const getAllRequestValidation = [
    validJWT
]

const getRequestValidation = [
    validJWT, 
    _idRequied,  
   _idExist,
    validationResult
]

module.exports = {
    postRequestValidations,
    putRequestValidations,
    getAllRequestValidation,
    getRequestValidation,
    deleteRequestValidations
}