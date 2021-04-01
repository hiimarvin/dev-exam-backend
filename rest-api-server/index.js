const app = require('express')();
const moment = require('moment-timezone');
const PORT = 8081;

app.listen(
  PORT,
  () => console.log(`REST API server alive at http://localhost:${PORT}`)
);

// API for health checks
app.get('/', (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .send("REST API server is up");
});

// Date-time API
app.get('/datetime', (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .send({
      date_time: moment().tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss')
    });
});