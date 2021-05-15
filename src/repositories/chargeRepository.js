const config = require('../config/index.js')
const db = require("../models");
const Charges = db.charges
const { response } = require('express');
const Openpay = require('openpay');
const openpay = new Openpay(config.open_pay_id, config.open_pay_key_private, false);

class ChargesRepository {

    constructor(){

    }
    async findAll(){
        return await Charges.findAll()
    }

    async findById(id) {
        
        return await Charges.findByPk(id)
    }
    
    async save(charge, idCustomer, res = response ) {
    

   let chargeResult = openpay.customers.charges.create(idCustomer, charge, async (error,chargeCreated ) => {  
      
        if(!chargeResult){
           res.json(error)
            }else {
           res.json(chargeCreated)
            }
        });
        return await Charges.create(charge)
       
}
}


module.exports = ChargesRepository;