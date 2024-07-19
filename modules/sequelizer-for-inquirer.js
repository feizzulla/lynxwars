const { Op } = require('sequelize');
const { User, Scores } = require('../db/models');

const createUser = async (name, login, password, age) => {
try {
    const newUser = await User.create({name, login, password, age})
    const newScore = await Scores.create({score: 0})
    console.log(newUser);
    console.log(newScore);
} catch (error) {
    console.log(error);
}} 

