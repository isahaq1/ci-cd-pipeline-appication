import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('CICD Project API is running.....From Ci');
});

app.listen(
  9000,
  console.log(
    `CICD Project server running  on port 9000 test`
  )
);
