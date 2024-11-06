import { Jwt } from "jsonwebtoken"
import dbContext from "./dbContext"
import { Request, Response, NextFunction } from "express"

export const express = require('express')
export const jwt:Jwt = require('jsonwebtoken')
export const cors = require('cors')
export const compression = require('compression')
export const cookieParser  = require('cookie-parser')
export const crypt = require('bcrypt')
const { Sequelize } = require('sequelize');
export const sequelize = new Sequelize(dbContext.database, dbContext.user, dbContext.password, {
    host: dbContext.host,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
            native: true
        }
    }
});
export const DataTypes = require('sequelize');