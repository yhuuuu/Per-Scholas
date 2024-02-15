// require express library
const express = require('express')
// run express and store return value in app variable
const app = express()
// save port number as a variable for dynamic purpose
const PORT = 3000


//Listen to the server on specified port
app.listen(PORT,()=>{
    console.log(`Server is listening port ${PORT}`);
})



