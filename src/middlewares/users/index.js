const { check } = require('express-validator');
const AppError = require('../../errors/appError');
const userService = require('../../services/userService');
const { ROLES, ADMIN_ROLE } = require('../../constants');
const {validationResult} = require('../commons');
const { validJWT, hasRole } = require('../auth');


//Validaciones
const _emailRequired = check('email', 'Email required').not().isEmpty();
const _emailValid = check('email', 'Email is invalid').isEmail();
const _emailExist = check('email').custom(
    async (email = '') => {
        const userFound = await userService.findByEmail(email);
        if(userFound) {
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

const _idRequired = check('id').not().isEmpty();
const _idExist = check('id').custom(
    async (id = '') => {
        const userFound = await userService.findById(id);
        if(!userFound) {
            throw new AppError('The id does not exist in DB', 400);
        }
    }
);


const postRequestValidations = [ 
    _emailRequired,
    _emailValid,
    _emailExist,
    validationResult
]

const putRequestValidations = [
     validJWT,
    hasRole(ADMIN_ROLE), 
   _idRequired,
    _idExist,
   _roleValid,
    validationResult
]

const deleteRequestValidations = [
      validJWT,
    hasRole(ADMIN_ROLE),  
    _idRequired,
    _idExist,
    validationResult
]

const getAllRequestValidation = [
     validJWT 
]

const getRequestValidation = [
      validJWT,
    _idRequired,
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