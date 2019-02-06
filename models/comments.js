module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('comments', {
        'id': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        'userId': DataTypes.INTEGER,
        'text' : DataTypes.STRING,
        'createdAt': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },    
        'updatedAt': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },{
        freezeTableName: true
    });
    return Comments;
}