const express = require("express");

const connectDB = require("./db")
const app = express()
const PORT = process.env.PORT || 3000
const urlRoutes = require("./routes/url.routes")

app.use(express.json());

connectDB();

app.use('/url',urlRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})