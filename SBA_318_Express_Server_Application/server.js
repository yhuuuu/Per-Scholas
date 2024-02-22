const exprss = require("express")
const bodyParser = require("body-parser")

const plants = require("./routes/plants")
const plantInfo = require("./routes/plantsInfo")
const swapInfo = require("./routes/swapInfo")

const error = require("./utilities/error")

const app = exprss()
const PORT = 3000




//middleware one
//middleware two

//error handling middleware


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})