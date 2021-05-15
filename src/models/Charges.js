const Charges = (sequelize, S) => {

  const Charge = sequelize.define(
    "charges",
    { 
    id: {
       type:S.UUID,
       defaultValue:S.UUIDV4,
       unique: true,
       primaryKey: true,
       allownNull: false
    },
    method: {
        type: S.STRING,
        allowNull: false,
    },
    amount: {
       type: S.INTEGER,
       allowNull: false
    },
    description: {
       type: S.STRING,
       allowNull: false,
    },
    order_id: {
      type:S.UUID,
      defaultValue:S.UUIDV4,
   },
    due_date: {
      type: S.DATE, 
      defaultValue: S.NOW
   },
   
    },
    {
      timestamps: true,
    }
  );

  return Charge;
}
module.exports = Charges;