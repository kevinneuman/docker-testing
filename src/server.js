/* eslint no-console: 0 */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(
  morgan('dev'),
  bodyParser.json(),
  cors(),
);

app.get('/', (req, res) => res.status(200).send('Hello'));
app.get('*', (req, res) => res.sendStatus(404));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
