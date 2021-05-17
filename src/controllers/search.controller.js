const express = require('express');
const searchService = require('../services/searchService');
const Success = require('../handlers/successHandler');


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const getStores = async (req, res, next) => {
    const { latitud,longitud,kilometers, amount } = req.query
     try {
         const store = await searchService.findByLocation(latitud,longitud,kilometers, amount);
         res.json(new Success(store));
     } catch (err) {
         next(err);
     }
 };

module.exports = {
  
    getStores
}