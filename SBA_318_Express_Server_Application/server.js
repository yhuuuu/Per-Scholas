//Require Statements
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const users = require("./routes/users")
const plantInfo = require("./routes/plantInfo")
const swapInfo = require("./routes/swapInfo")

const error = require("./utilities/error")

//Setting Up Express Application:
const app = express()
const PORT = 3000

// Set EJS as the view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


/** Middleware #1 - URL-Encoded Body Parsing
 * Allow the parsing of URL-encoded data with richer data types beyond just strings.Which means can parse more complex data structures, such as nested objects and arrays, from the URL-encoded format.
 */
app.use(bodyParser.urlencoded({ extended: true }))

/** Middleware #2 - JSON Body Parsing
 * Middleware to parse incoming request bodies as JSON and make the parsed JSON data available through req.body in your Express.js route handlers.
 */
app.use(bodyParser.json({ extended: true }))


//Middleware #3 - Logging 
app.use((req, res, next) => {
    const time = new Date();

    console.log(
        `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    //If the length of the array of keys is greater than 0 (i.e., , the condition Object.keys(req.body).length > 0 evaluates to true
    if (Object.keys(req.body).length > 0) {
        console.log("Containing the data:");
        console.log(`${JSON.stringify(req.body)}`);
    }
    //next() function is called to pass control to the next middleware function in the stack. This is important to ensure that the request continues to be processed by subsequent middleware and eventually reaches the appropriate route handler.

    next()

})
//Routes Setup:

app.use("/users", users)
app.use("/plantInfo", plantInfo)
app.use("/swapInfo", swapInfo)


//HATEOAS Links for get "/"
app.get("/", (req, res) => {
    res.json({
        links: [
            {
                href: "/users",
                rel: "users",
                type: "GET",
            },
            {
                href: "/users",
                rel: "users",
                type: "POST",
            },
            {
                href: "/plantInfo",
                rel: "plantInfo",
                type: "GET",
            },
            {
                href: "/plantInfo",
                rel: "plantInfo",
                type: "POST",
            },
            {
                href: "/swapInfo",
                rel: "swapInfo",
                type: "GET",
            },
            {
                href: "/swapInfo",
                rel: "swapInfo",
                type: "POST",
            },
        ]
    })
});


app.get('/userForm', (req, res) => {
    res.render('userForm');
});




//Middleware #4 - Error Handling
app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.status(404).json({ error: 'Resource Not Found' })
    }
    else {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' })
    }

})
//Server Start 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})