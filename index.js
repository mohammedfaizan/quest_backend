import express from "express";
import cors from "cors";
import db from "./utils/db.js";
import router from "./routes/quest.routes.js";

const app = express();
const port = process.env.PORT || 5002;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db();

app.get("/", (req, res) => {
  res.send("nodejs backend is running");
});

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
