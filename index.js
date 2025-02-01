import "dotenv/config";
import express from "express";
import connectDB from "./db/index.js";
connectDB();

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.json({ "server":"server is on" });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("app listening on port : " + port);
});