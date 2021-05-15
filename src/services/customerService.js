const CustomerRepository = require('../repositories/customerRepository');
const repository = new CustomerRepository();

const findById = async(id) => {
    return await repository.findById(id);
}

const findByEmail = async(email) => {
    return await repository.findByEmail(email);
}


const findAll = async() => {
    return await repository.findAll();
}


const save = async(customer) => {
  return await repository.save(customer)
 
}

const update = async(id, customer) => {
    return await repository.update(id, customer);
}

const remove = async(id) => {
    return await repository.remove(id);
}

const findByLocation= async (latitud,longitud,kilometers, amount)=>{
    
    return await repository.findByLocation(latitud,longitud,kilometers, amount);

}

module.exports = {
    findById,
    findByEmail,
    findAll,
    save,
    update,
    remove,
    findByLocation
}