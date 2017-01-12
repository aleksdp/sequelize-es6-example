export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
      }
    }
  })
  return User
}