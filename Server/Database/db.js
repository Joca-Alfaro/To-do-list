const mongoose = require('mongoose');
require('dotenv').config();

const{
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env;

//USUARIO CARLOS
// const mongoURL = 'mongodb+srv://carlos:alfaro123@cluster0.9surzea.mongodb.net/test'
//USUARIO SA
const mongoURL = 'mongodb+srv://SA:alfaro123@cluster0.9surzea.mongodb.net/test'


const connect = async function (){
  try {
    await mongoose.connect(mongoURL);
      console.log('Connected to database')
  } catch (error) {
   console.log(error)
  }

}

module.exports = connect