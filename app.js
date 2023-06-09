require('dotenv').config();
const express = require('express');

// express app
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
// port number
const PORT = process.env.PORT || 3000;  

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});