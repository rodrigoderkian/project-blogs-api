const PostsCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define(
    'PostsCategory',
    {
      categoryId: { type: DataTypes.INTEGER },
      postId: { type: DataTypes.INTEGER },
    },
    // //createdAt e updatedAt estavam dando erro nos seeds, resolvi tirar, e passou no req2
    { timestamps: false },
  );

  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return postCategory;
};

module.exports = PostsCategory;
