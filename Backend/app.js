const express = require('express');
const chainsawRouter = require('./routes/chainsawRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
const port = 3001;

app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello World'
  });
});

app.use('/api/v1/', chainsawRouter);


app.use('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'Route not found'
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

module.exports = app;