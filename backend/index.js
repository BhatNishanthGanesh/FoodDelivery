const express = require('express')
const app = express()
const port = 5000
const mongoDB=require('./database')
mongoDB()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api',require("./routes/Createuser")) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
