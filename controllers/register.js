const bodyParser = require('../middleware/middleware');
const SignUp = require('../models/signUp');

const signUp = async (req, res) => {
    console.log(req.body);
    const sign_up = new SignUp(req.body);
    try {
        if (req.body.password !== req.body.repeat_password) {
            res.send('<h1>Passwords do not match!</h1>');
            res.redirect('/signUp');
        }
        const result = await SignUp.find({ email: req.body.email });
        if (!result) {
            await sign_up.save()
            .then((result) => {
                console.log('User signed up successfully',result);
                res.redirect('/car');
        })
        .catch((err) => {
            console.log(err);
        });
    }
    res.send('<h1>A User with this email exists!</h1>');
    res.redirect('/signUp');
} catch (error) {
    console.log('an error occured in the registeration',error);

}
}

const login = async (req, res) => {
    try {
        const input = req.body;
        const email = await SignUp.find({ email: input.email });
        const password = await SignUp.find({ password: input.password });
        if (email && password) {
            res.send('<h1>User logged in successfully!</h1>');
            res.redirect('/car');
        } else {
            res.send('<h1>Invalid email or password!</h1>');
            res.redirect('/login');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    signUp,
    login
}