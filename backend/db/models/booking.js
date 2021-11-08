'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Listing,{foreignKey:"listingId"})
    Booking.belongsTo(models.User,{foreignKey:"userId"})
  };
  return Booking;
};
