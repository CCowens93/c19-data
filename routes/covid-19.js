const express = require('express')

const dataApi = require('../models/covid-19.js')

const dataRouter = express.Router()

dataRouter.get('/', (req, res) => {
    dataApi.getAllData()
    .then((allData) => {
        res.json(allData)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})



dataRouter.get('/:id', (req, res) => {
    dataApi.getOneData(req.params.dataId)
    .then((oneData) => {
        res.json(oneData)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

module.exports = {
    dataRouter
}