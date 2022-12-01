const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const userRouter = require("./routes/user-routes");
const orderRouter = require("./routes/order-routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
app.use("/user", userRouter);    
app.use("/order", orderRouter);  

mongoose
  .connect(
    "mongodb+srv://hemkant:hemkantpass@database.kbdsqqy.mongodb.net/Database?retryWrites=true&w=majority"
   
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
