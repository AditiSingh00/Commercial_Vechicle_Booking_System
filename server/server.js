const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/db");
const userRoute = require('./routes/userRoute');
dotenv.config();
connectDb();

// Create the Express app
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/users", userRoute);
app.use("/api/v1/vehicles", require("./routes/vehicleRoute"));
app.use('/api/payment', require('./routes/paymentRoutes')); 

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Hello from Server</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`.bgGreen);
});
