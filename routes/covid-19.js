const mongoose = require('mongoose');
const Data = mongoose.model('data');

module.exports = (app) => {

  app.get(`/api/data`, async (req, res) => {
    let data = await Data.find();
    return res.status(200).send(data);
  });

  app.post(`/api/data`, async (req, res) => {
    let data = await Data.create(req.body);
    return res.status(201).send({
      error: false,
      data
    })
  })

  app.put(`/api/data/:id`, async (req, res) => {
    const {id} = req.params;

    let data = await Data.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      data
    })

  });

  app.delete(`/api/data/:id`, async (req, res) => {
    const {id} = req.params;

    let data = await Data.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      data
    })

  })

}