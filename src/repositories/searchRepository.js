const  axios  = require('axios');

class SearchRepository {

    constructor(){

    }

    async findByLocation(latitud,longitud,radio, monto){
    let search="https://api.openpay.mx/stores?latitud="+latitud+"&longitud="+longitud+"&kilometers="+radio+"&amount="+monto;
    
    let searchResult = await axios(search)
   
    return searchResult.data
}



}

module.exports = SearchRepository;