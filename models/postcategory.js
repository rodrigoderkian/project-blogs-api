const PostCategory = (sequelize, _DataTypes) => {
  const postCategory = sequelize.define(
    'PostsCategory',
    {},
    // //createdAt e updatedAt estavam dando erro nos seeds, resolvi tirar, e passou no req2
    { timestamps: false },
  );

  postCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
    });
  };

  return postCategory;
};

module.exports = PostCategory;
