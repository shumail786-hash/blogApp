import express from "express";
import cors from "cors";
import Router from "./Routers/Post.js";
const app = express();
import db from './Db/Conn.js'

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3500;

app.use("/", Router);

app.listen(PORT, () => {
  console.log("Server is Running");
});
