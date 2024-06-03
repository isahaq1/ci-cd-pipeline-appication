import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('CICD Project API is running.....From Ci Hello ');
});

app.listen(
  21000,
  console.log(
    `CICD Project server running  on port 2000 test`
  )
);
module.exports = app;
