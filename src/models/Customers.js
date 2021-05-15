const Customers = (sequelize, S) => {

    const Customer = sequelize.define(
      "customers",
      { 
      id: {
         type:S.UUID,
         defaultValue:S.UUIDV4,
         unique: true,
         primaryKey: true,
         allownNull: false
      },
      name: {
          type: S.STRING,
          allowNull: false,
      },
      last_name: {
          type: S.STRING,
      },
      email: {
          type: S.STRING,
          allowNull: false,
          unique: true,
          validate:{
          isEmail:true,
          }
      },
      external_id: {
         type:S.UUID,
         defaultValue:S.UUIDV4,
         unique: true,
      },
      requires_account: {
         type: S.BOOLEAN,
         defaultValue: true
      },
      phone_number: {
         type: S.STRING,
      },
      address_line1: {
         type: S.STRING,
      },
      address_line2: {
        type: S.STRING,
     },
      address_line2: {
        type: S.STRING,
     },
      state: {
        type: S.STRING,
     },
      city: {
         type: S.STRING,
      },
      country_code: {
        type: S.STRING,
     },
      },
      {
        timestamps: true,
      }
    );
  
    return Customer;
  }
  module.exports = Customers;
 