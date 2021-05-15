const express = require('express');
const customerService = require('../services/customerService');
const Success = require('../handlers/successHandler');
const logger = require('../loaders/logger');
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllCustomers = async (req, res, next) => {
    try {

        logger.info('Query: ' + JSON.stringify(req.query));

        const users = await customerService.findAll();
        res.json(new Success(users));
        
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createCustomer = async (req, res, next) => {

   
    try {
        let customer = req.body;

        customer = await customerService.save(customer);
       
        logger.info('Query: ' + JSON.stringify(customer));
     
        res.status(201).json(new Success(customer));
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const updateCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        let customer = req.body;

        const customerUpdated = await customerService.update(id, customer);

        res.json(new Success(customerUpdated));
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getById = async (req, res) => {
   const { id } = req.params
    try {
        const customer = await customerService.findById(id);
        res.json(new Success(customer));
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const deleteCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await customerService.remove(id);
        res.json(new Success(user));
    } catch (err) {
        next(err);
    }
};

const getAllStores = async (req, res) => {
    const { latitud,longitud,kilometers, amount } = req.params
     try {
         const store = await customerService.findByLocation(latitud,longitud,kilometers, amount);
         res.json(new Success(store));
     } catch (err) {
         next(err);
     }
 };

module.exports = {
    getAllCustomers,
    createCustomer,
    updateCustomer,
    getById,
    deleteCustomer,
    getAllStores
}