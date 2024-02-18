const express = require("express");
const bodyParser = require("body-parser");

const users = require("./routes/users");
const posts = require("./routes/posts");

const error = require("./utilities/error");

const app = express();
const port = 3000;

// Parsing Middleware -- parse JSON and URL-encoded data

//allow the parsing of URL-encoded data with richer data types beyond just strings. This means that you can parse more complex data structures, such as nested objects and arrays, from the URL-encoded format
app.use(bodyParser.urlencoded({ extended: true }));

//middleware to parse incoming request bodies as JSON and make the parsed JSON data available through req.body in your Express.js route handlers.
app.use(bodyParser.json({ extended: true }));

// Logging Middlewaare
//app.use() allows you to define middleware functions that have access to the request and response objects, which enables you to perform various tasks such as logging, authentication, error handling, etc., in your Express.js application
app.use((req, res, next) => {//the next function, which is used to pass control to the next middleware function in the stack.
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
});

// Valid API Keys.
apiKeys = ["perscholas", "ps-example", "hJAsknw-L198sAJD-l3kasx"];

// New middleware to check for API keys!
// Note that if the key is not verified,
// we do not call next(); this is the end.
// This is why we attached the /api/ prefix
// to our routing at the beginning!
// app.use("/api", function (req, res, next) {
//   var key = req.query["api-key"];

//   // Check for the absence of a key.
//   if (!key) next(error(400, "API Key Required"));

//   // Check for key validity.
//   if (apiKeys.indexOf(key) === -1) next(error(401, "Invalid API Key"));

//   // Valid key! Store it in req.key for route access.
//   req.key = key;
//   next();
// });
// Use our Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

// Adding some HATEOAS links.

//when a GET request is made to "/", the server responds with a JSON object containing a single link object with the URL "/api", the relationship "api", and specifying that it supports GET requests. This is a common practice in RESTful APIs to provide clients with discoverable endpoints.
app.get("/", (req, res) => {
  res.json({
    links: [
      {
        href: "/api",
        rel: "api",
        type: "GET",
      },
    ],
  });
});

// Adding some HATEOAS links.
app.get("/api", (req, res) => {
  res.json({
    links: [
      {
        href: "api/users",
        rel: "users",
        type: "GET",
      },
      {
        href: "api/users",
        rel: "users",
        type: "POST",
      },
      {
        href: "api/posts",
        rel: "posts",
        type: "GET",
      },
      {
        href: "api/posts",
        rel: "posts",
        type: "POST",
      },
    ],
  });
});

// 404 Middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
});

// Error-handling middleware.
// Any call to next() that includes an
// Error() will skip regular middleware and
// only be processed by error-handling middleware.
// This changes our error handling throughout the application,
// but allows us to change the processing of ALL errors
// at once in a single location, which is important for
// scalability and maintainability.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
