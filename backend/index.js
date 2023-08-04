const express = require('express')
const app = express()
const port = 5000
const mongoDB=require('./database')


// mongoDB()
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header(
    "Access-Control-Allow-headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})
app.use(express.json())
// app.use('/api',require("./routes/loginuser"))  
// app.get('/',(req,m) =>{
//   res.send('Hello World!')
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
