'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    listingId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Listing,{foreignKey:"listingId"})
  };
  return Image;
};
