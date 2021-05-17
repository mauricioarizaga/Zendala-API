const SearchRepository = require('../repositories/searchRepository');
const repository = new SearchRepository();

const findByLocation= async (latitud,longitud,kilometers, amount)=>{
    
    return await repository.findByLocation(latitud,longitud,kilometers, amount);

}

module.exports = {
    findByLocation
}