import express from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/book.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connection = mongoose.connection;
connection.once("connected", () => console.log("Database Connected ~"));
connection.on("error", (error) => console.log("Database Error: ", error));
mongoose.connect("mongodb://127.0.0.1:27017/books", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use("/books", bookRouter);

app.listen(3000, () => console.log("Server Started ~"));
