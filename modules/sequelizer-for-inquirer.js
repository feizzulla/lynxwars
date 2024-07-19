
const { User, Score } = require('../db/models');

const createUser = async (name, age, login, password) => {
    try {
        const newUser = await User.create({name, age, login, password})
        const newScore = await Score.create({userId: newUser.dataValues.id})
} catch (error) {
    console.log(error);
}} 

module.exports = createUser