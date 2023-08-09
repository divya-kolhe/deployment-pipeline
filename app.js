// Requiring module
const express = require('express');
 
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('Hello World')
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||5000;
//HOST
const HOST = process.env.HOST
// Server Setup
app.listen(PORT,HOST,console.log(
  `Server started on port ${PORT}`));