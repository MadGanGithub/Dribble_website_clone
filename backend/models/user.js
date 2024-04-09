import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`postgresql://database_owner:${process.env.DATABASE_PASSWORD}@ep-muddy-rain-a5pz00ds.us-east-2.aws.neon.tech/database?sslmode=require`);

const User = sequelize.define(
  "User",
  {
    userid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.STRING, // Assuming imageUrl is a string
      allowNull: true, // Or false if it's required
    },
    location: {
      type: Sequelize.STRING, // Assuming location is a string
      allowNull: true, // Or false if it's required
    },
    roles: {
      type: Sequelize.ARRAY(Sequelize.STRING), // Assuming roles is an array of strings
      allowNull: true, // Or false if it's required
    },
  },
    {
      timestamps: false,
      tableName: "user",
    }
  );  

sequelize.sync();

export default User;