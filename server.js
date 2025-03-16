//Detailed doccumentation on how to do this task -->
// created the directory sit323-2025-prac2p
//make sure to have node.js installed, search web on how to do this
// initialize project using npm init on terminal
// install express using npm install express --save on terminal
// copy below code onto a new Server.js file
// create a simple HTML page as i have seperately
// launch server by typing 'node .' or 'node server.js' on terminal

// trouble shooting tips-->
// you may need to adjust the port number if loading errors occur
// you may need to use the 'const path' code line to resolve any path issues that may occur when starting Server.

const express = require('express');
const path = require('path'); //needed to resolve path file correctly 

const app = express();
const port = 5000;


// serving HTML file on server
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'webpage.html'));
});

//Start server
app.listen(port, () => {
    console.log(`This app is listening at http://localhost:${port}`);
});
