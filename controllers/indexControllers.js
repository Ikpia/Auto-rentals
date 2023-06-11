const car = require('./carControllers');

const home = async (req, res) => {
    try {
        res.render('index', {car: car});
    } catch (error) {
        console.log(error);
    }
}

const about = async (req, res) => {
    try {
        res.render('about');
    } catch (error) {
        console.log(error);
    }
}

const services = async (req, res) => {
    try {
        res.render('service');
    } catch (error) {
        console.log(error);
    }
}

const contact = async (req, res) => {
    try {
        res.render('contact');
    } catch (error) {
        console.log(error);
    }
}

const signUp = async (req, res) => {
    try {
        res.render('signUp');
    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        console.log(error);
    }
}

const car = async (req, res) => {
    try {
        res.render('car');
    } catch (error) {
        console.log(error);
    }
}

const payment = async (req, res) => {
    try {
        res.render('payment');
    } catch (error) {
        console.log(error);
    }
}

const order = async (req, res) => {
    try {
        res.render('order');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    home, 
    about, 
    services, 
    contact,
    car,
    signUp,
    login,
    payment,
    order
}