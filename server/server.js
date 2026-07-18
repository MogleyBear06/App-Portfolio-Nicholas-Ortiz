require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');
app.use(cors({
  origin: ['https://www.scottortizwedding.com'],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.options('*', cors());
app.use(express.urlencoded({extended : true }));
app.use(express.json());
app.use(routes);


try {
  app.listen(process.env.PORT || 3003, () => {
    console.log(`API server running on port 3003`);
  });
} catch (err) {
  console.error(`Error while starting the server: ${err.message}`);
}
