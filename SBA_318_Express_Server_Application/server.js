const exprss = require("express")
const bodyParser = require("body-parser")

const plants = require("./routes/plants")
const plantInfo = require("./routes/plantsInfo")
const swapInfo = require("./routes/swapInfo")

const error = require("./utilities/error")

const app = exprss()
const PORT = 3000


/** Middleware #1 -- parsing middleware
 * Allow the parsing of URL-encoded data with richer data types beyond just strings.Which means can parse more complex data structures, such as nested objects and arrays, from the URL-encoded format.
 */

app.use(bodyParser.urlencoded({ extended: true }))

/** Middleware #2 -- parsing middleware
 * Middleware to parse incoming request bodies as JSON and make the parsed JSON data available through req.body in your Express.js route handlers.
 */

app.use(bodyParser.json({ extended: true }))

/** Middleware #3 -- logging middleware
 * Define middleware functions that have access to the req and res objects, which enables to perform various tasks: logging, authtication, error handling.
 */

app.use((req,res,next)=> {
    const time = new Date();

    console.log(
      `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    //If the length of the array of keys is greater than 0 (i.e., if req.body is not an empty object), the condition Object.keys(req.body).length > 0 evaluates to true
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    //next() function is called to pass control to the next middleware function in the stack. This is important to ensure that the request continues to be processed by subsequent middleware and eventually reaches the appropriate route handler.
    next();
})



//error handling middleware


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})