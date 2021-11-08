'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    catagoryId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [3, 256]
      },
    },
    lng: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [3, 256]
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10]
      },
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        len: [1, 256]
      },
    },
  }, {});
  Listing.associate = function(models) {
    Listing.hasMany(models.Image, {
      foreignKey:"listingId",
      onDelete: 'cascade',
      hook: true
    })
    Listing.belongsTo(models.User, {foreignKey:"userId"})
    Listing.belongsTo(models.Catagory, {foreignKey:"catagoryId"})
  };
  return Listing;
};
