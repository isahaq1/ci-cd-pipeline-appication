import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('CICD Project API is running.....');
});

app.listen(
  3000,
  console.log(
    `CICD Project server running  on port 3000 test`
  )
);
