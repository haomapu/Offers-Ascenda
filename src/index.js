import express from 'express'
import offerRoute from './routes/offer.route.js'

const app = express()
const PORT = "8080";


app.use('/', offerRoute);



app.listen(PORT, function () {
    console.log(`E-Commerce App listening at http://localhost:${PORT}`);
  });
  