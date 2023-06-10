const home = async (req, res) => {
    try {
        res.render('index');
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

module.exports = {
    home, 
    about, 
    services, 
    contact
}