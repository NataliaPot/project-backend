import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import moviesRouter from "./routes/moviesRouter.js";
import contactsRouter from "./routes/contactsRouter.js";

import { DB_HOST } from "./config.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/movies", moviesRouter);
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

console.log(process.env);

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("Server is running. Use our API on port: 3000");
//     });
//   })
//   .catch((error) => {
//     process.exit(1);
//     console.log(error.message);
//   });

// ZrmN9K4Q9qG9GoCZ
