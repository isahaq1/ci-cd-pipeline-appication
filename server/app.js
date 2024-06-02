import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('CICD Project API is running.....From Ci');
});

app.listen(
  7000,
  console.log(
    `CICD Project server running  on port 7000 test`
  )
);
