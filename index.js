const express = require("express")
const app = express()

app.get ("/", (req, res) => {
  res.send("Alex!!")
})

app.listen(3000, () => {
  console.log("Hello World!!")
})
