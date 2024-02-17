// require express library
const express = require('express');
const pug = require('pug');
// run express and store return value in app variable
const app = express()
// save port number as a variable for dynamic purpose
const PORT = 3000

// Compile the source code
const compiledFunction = pug.compileFile('template.pug');

app.get("/", (req, res) => {

    // Render a set of data
    const renderedHtml = compiledFunction({
        name: 'Timothy'
    });
    console.log(renderedHtml); // Output the rendered HTML to the console
    res.send(renderedHtml); // Send the rendered HTML as the response


})

// Render another set of data

app.get("/user", (req, res) => {

    // Render a set of data
    const renderedHtml = compiledFunction({
        name: 'Forbes'
    });
    console.log(renderedHtml); // Output the rendered HTML to the console
    res.send(renderedHtml); // Send the rendered HTML as the response


})



//Listen to the server on specified port
app.listen(PORT, () => {
    console.log(`Server is listening port ${PORT}`);
})





