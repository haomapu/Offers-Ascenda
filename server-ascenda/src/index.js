import express from 'express';
import { engine } from 'express-handlebars';
import offerRoute from './routes/offer.route.js'
import { fileURLToPath } from "url";
import cors from 'cors'
import bodyParser from "body-parser";
import { dirname } from "path";

const app = express()
const PORT = "8080";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine(
  "hbs",
  engine({
    defaultLayout: "main.hbs",
    helpers: {
    },
  })
);
app.set('view engine', 'handlebars');
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");



app.use('/', offerRoute);

app.listen(PORT, function () {
    console.log(`E-Commerce App listening at http://localhost:${PORT}`);
  });
  