const bcrypt = require('bcrypt');
const db = require("../models");
const Users = db.users

class UsersRepository {

    constructor(){

    }
    async findAll(){
        return await Users.findAll();
    }

    async findById(id) {
        return await Users.findByPk(id);
    }
    
    async findByEmail(email) {
        return await Users.findOne({where:{"email": email}});
    }

    async save(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return await Users.create(user);
    }

    async update(id, user){
        user.password = await bcrypt.hash(user.password, 10);
        return await Users.update(user, { where: {"id": id}});
    }

    async remove(id) {
        return await Users.destroy({where:{"id": id}});
    }
}

module.exports = UsersRepository;