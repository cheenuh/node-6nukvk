//Silva, Cheena Maxine G.
//WD201

//Installing express
//installing libraries/dependencies
//require statements

const express = require('express');
const app = express();

//use the middleware required for serving static
app.use(express.static('public'));

//create the route to serve a static index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
})

//setting the listener to ENV PORT info
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})