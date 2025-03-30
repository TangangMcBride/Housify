import express from "express";
import dotenv from "dotenv";
import DbConfig from "./config/DbConfig.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
DbConfig();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
