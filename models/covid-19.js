const mongoose = require('./connection.js')

const dataSchema = new mongoose.Schema({
    country: String,
    confirmed: Number,
    recovered: Number,
    critical: Number,
    deaths: Number,
    latitude: Number,
    longitude: Number
})

const DataCollection = mongoose.model('Data', dataSchema)


const getAllData = () => {
    return DataCollection.find()
}

const getOneData = (dataId) => {
    return DataCollection.findById(dataId)
}

module.exports ={
    getAllData,
    getOneData
}