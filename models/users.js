module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        'id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'name': DataTypes.STRING,
        'email': DataTypes.STRING,
        'password': DataTypes.STRING,
        'address': DataTypes.STRING,
        'phone': DataTypes.STRING,
        'website': DataTypes.STRING,
        'company': DataTypes.STRING,
        'createdAt': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },    
        'updatedAt': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        freezeTableName: true
    });
    return Users;
}