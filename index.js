const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/covid-19')

const app = express()

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/covid-19`);

app.use(bodyParser.json());


require('./routes/covid-19')(app);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  
  }



const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})


