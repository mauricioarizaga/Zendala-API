const express = require('express');
const chargeService = require('../services/chargeService');
const Success = require('../handlers/successHandler');
const logger = require('../loaders/logger');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getAllCharges = async (req, res, next) => {
    try {

        logger.info('Query: ' + JSON.stringify(req.query));

        const charges = await chargeService.findAll();
        res.json(new Success(charges));
        
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const createUserCharge = async (req, res, next) => {
    let charge = req.body;
      
    try {
       
        charge = await chargeService.save(charge);

        res.status(201).json(new Success(charge));
    } catch (err) {
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
 const getUserChargeById = async (req, res, next) => {
    const { id } = req.params;
    try {

        logger.info('Query: ' + JSON.stringify(id));

        const charge = await chargeService.findById(id);
        res.json(new Success(charge));
        
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllCharges, 
    createUserCharge,
    getUserChargeById,
}
