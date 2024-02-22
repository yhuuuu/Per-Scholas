const exprss = require("express")
const bodyParser = require("body-parser")

const app = exprss()
const PORT = 3000


//middleware one
//middleware two

//error handling middleware


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})