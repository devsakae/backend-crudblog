const UserSchema = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncxcrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'users', 
    underscored: true,
    timestamps: false
  });
  User.associate = (models) => {
    User.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'id',
    })
  };
  return User;
};

module.exports = UserSchema;