import express from 'express';
import offerRoute from './routes/offer.route.js'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()
const PORT = "8080";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', offerRoute);

app.listen(PORT, function () {
    console.log(`E-Commerce App listening at http://localhost:${PORT}`);
  });
  