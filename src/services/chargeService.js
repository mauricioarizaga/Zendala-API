const ChargeRepository = require('../repositories/chargeRepository.js');
const repository = new ChargeRepository();


const findAll = async() => {
    return await repository.findAll();
}

const save = async(charge) => {
    return await repository.save(charge);
}

const findById = async(id) =>{
    return await repository.findById(id);
}



module.exports = {
    findAll,
    save,
    findById
}