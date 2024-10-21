import { PrimaryKey } from "sequelize-typescript";
import { DataTypes, sequelize } from "../../core/modules";
import User from "./UserModel";

const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,  // Reference the User model
            key: 'username'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,  // Reference the User model
            key: 'username'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    team: {
        type: DataTypes.STRING,
        allowNull: true
    },
    favorite_pokemon: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'player',
    timestamps: false
})

export default Player;
