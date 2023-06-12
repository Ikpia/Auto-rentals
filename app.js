require('dotenv').config();
const express = require('express');
const dbConnect = require('./models/connect');
const bodyParser = require('body-parser');
// express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));  // parse application/x-www-form-urlencoded
app.use(express.static('public'));
app.set('view engine', 'ejs');
// port number
const PORT = process.env.PORT || 3000;  

const indexController = require('./controllers/indexControllers');
const register = require('./controllers/register');

app.get('/', indexController.home);
app.get('/signup', indexController.signUp);
app.post('/signup', register.signUp);
app.post('/login', register.login);
app.get('/login', indexController.login);
app.get('/car', indexController.carRoute);
app.post('/car', indexController.selectCar);
app.get('/about', indexController.about);
app.get('/service', indexController.services);
app.get('/contact', indexController.contact);
app.get('/payment', indexController.payment);
app.get('/order', indexController.order);
app.get('/team', indexController.team);
app.get('/testimonial', indexController.testimonial);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});