const express = require('express')
const app = express('app')

app.get('/users/', require('./routes/userRoute'))

app.listen(3002, function () {
  console.log('The server is running on port 3002')
})
