const mongoose = require('mongoose');
const {Schema} = mongoose;


const dataSchema = new Schema({
    country: String,
    confirmed: Number,
    recovered: Number,
    critical: Number,
    deaths: Number,
    latitude: Number,
    longitude: Number
})

mongoose.model('data', dataSchema);