const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define(
    'BlogPost',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    { timestamps: false, tableName: 'BlogPosts' },
  );
  return blogPost;
};

module.exports = BlogPost;
