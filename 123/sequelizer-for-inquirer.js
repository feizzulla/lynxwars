
const { User, Score } = require('../db/models');


const createUser = async (name, age, login, password) => {
try {
    const newUser = await User.create({name, age, login, password})
    console.log(newUser);
    console.log(newScore);
} catch (error) {
    console.log(error);
}} 

