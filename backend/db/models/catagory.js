'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catagory = sequelize.define('Catagory', {
    catagory: DataTypes.STRING
  }, {});
  Catagory.associate = function(models) {
    Catagory.hasMany(models.Listing,{
      foreignKey:"catagoryId",
      onDelete: 'CASCADE',
      hooks: true
    })
  };
  return Catagory;
};
