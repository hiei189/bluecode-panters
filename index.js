const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const watson = require('watson-developer-cloud');

const app = express();

app.use(bodyParser.json());

const classifier = new watson.NaturalLanguageClassifierV1({
  username: '865fce19-b2d3-42a4-83a7-c9645a0c2cb9',
  password: 'eBGB4QghhU4h',
  url: 'https://gateway.watsonplatform.net/natural-language-classifier/api'
});

app.get('/api/classifier', (req, res) => {
  const { text } = req.query;
  classifier.classify(
    {
      text,
      classifier_id: '52a417x494-nlc-439'
    },
    (err, data) => {
      res.json({
        success: true,
        data
      });
    }
  );
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(3001, (err, res) => {
  console.log('LISTENING ON PORT 3001');
});
