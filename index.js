import express from "express";
import cors from "cors";
import db from "./utils/db.js";
import questRoutes from "./routes/quest.routes.js";
import passport from "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = process.env.PORT || 5002;
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

db();

app.get("/", (req, res) => {
  res.send("nodejs backend is running");
});

app.use("/api/v2", authRoutes);
app.use("/api/v2", questRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
