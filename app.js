const express = require('express');

// express app
const app = express();

app.static('public');
app.set('view engine', 'ejs');
// port number
const PORT = process.env.PORT || 3000;  


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});