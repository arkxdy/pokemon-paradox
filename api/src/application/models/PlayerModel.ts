import { PrimaryKey } from "sequelize-typescript";
import { DataTypes, sequelize } from "../../core/modules";

const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
