import express from 'express';
import morgan from 'morgan';
const app = express();
const port = 3000
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Example app Running test Hello DX Numatrix Arnob')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
