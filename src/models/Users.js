const Users = (sequelize, S) => {

    const User = sequelize.define(
      "users",
      {
        id: {
        type:S.UUID,
        defaultValue:S.UUIDV4,
        unique: true,
        primaryKey: true
        },
        email: {
        type: S.STRING,
        allowNull: false,
        unique: true,
        validate:{
        isEmail: true,
          }
          },
        password: {
        type: S.STRING,
        allowNull: false
          },
        role: {
        type: S.ENUM,
        allowNull: false,
        values:['USER_ROLE', 'ADMIN_ROLE'],
        defaultValue: 'USER_ROLE',
        }, 
      },
      {
        timestamps: true,
      }
    );
  
    return User;
  }
  module.exports = Users;