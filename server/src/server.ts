import routes from "./routes";
import dotenv from "dotenv";
import cors from 'cors';
import express from "express";
import "@database";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(express.static(__dirname + "/public"));

app.listen(process.env.SERVER_PORT || 3001, () => {
  console.log("📦 Server running");
});