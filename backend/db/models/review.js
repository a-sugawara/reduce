'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Listing,{foreignKey:'listingId'})
    Review.belongsTo(models.User,{foreignKey:'userId'})
  };
  return Review;
};
