import express from "express";
import cors from "cors";
import "dotenv/config";

import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`API online on port ${PORT}`);
});
