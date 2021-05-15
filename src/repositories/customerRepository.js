const config = require('../config/index.js')
const db = require("../models");
const Customers = db.customers
const { response } = require('express');
const Openpay = require('openpay');
const openpay = new Openpay(config.open_pay_id, config.open_pay_key_private, false);

class CustomerRepository {

    constructor(){

    }
    async findAll(){
        return await Customers.findAll()
    }

    async findByEmail(email) {
        return await Customers.findOne({ where: {"email": email}})
    }
    async findById(id) {
        return await Customers.findByPk(id)
    }
    
    async save(customer, res = response ) {
   let customerResult =  openpay.customers.create(customer, async (error,customerCreated, ) => {  
      
        if(!customerResult){
           res.json(error)
            }else {
           res.json(customerCreated)
            }
        });
        return await Customers.create(customerResult)
       
}

    async update(id, customer, res = response){
   
        let customerResult =  openpay.customers.update(id, customer, async (error,customerUpdated, ) => {  
      
            if(!customerResult){
               res.json(error)
                }else {
               res.json(customerUpdated)
                }
            });
            return await Customers.update(customer,{ where: {'id': id}})
    }

    async remove(id) {
        let customerResult =  openpay.customers.delete(id, async (error, result, ) => {  
      
            if(!customerResult){
               res.json(error)
                }else {
               res.json(result)
                }
            });
            return await Customers.delete({ where: {'id': id}})
    } 

async findByLocation(latitud,longitud,kilometers, amount){
    let searchResult =  openpay.customers.stores(latitud,longitud,kilometers, amount, async (error, result, ) => {  
      
        if(!searchResult){
           res.json(error)
            }else {
           res.json(result)
            }
        });


}



}

module.exports = CustomerRepository;