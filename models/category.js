const Category = (sequelize, DataTypes) => {
  const category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
    },
    // //createdAt e updatedAt estavam dando erro nos seeds, resolvi tirar, e passou no req2
    { timestamps: false },
  );

  return category;
};

module.exports = Category;
