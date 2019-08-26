const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const DomainData = require('./domain-data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute =
  'mongodb+srv://domainUser:domainPassword@domaincluster-hzl4n.mongodb.net/domainDB?authSource=admin';

mongoose.connect(dbRoute, { useNewUrlParser: true }).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('connected', function () {
  console.log('Mongoose connected');
});

db.on('disconnected', function () {
console.log('Mongoose disconnected');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/getDomainData', (req, res) => {
  DomainData.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post('/addDomainName', (req, res) => {
  const { description, isValid, name } = req.body;
  let query  = DomainData.where({name});
  query.findOne(function (err, domain) {
    if (err) return handleError(err);
    if(domain) {
      DomainData.findByIdAndUpdate(domain._id, {description}, (err) => {
        if (err) return res.json({ success: false, error: err });
          return res.json({ success: true });
        });
      } else {
        const domainCollection = new DomainData({
          description,
          isValid,
          name
        });

        domainCollection.save((err) => {
          if (err) return res.json({ success: false, error: err });
          return res.json({ success: true , domainCollection});
        });
      }
    });
  });

app.use('/api', router);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
