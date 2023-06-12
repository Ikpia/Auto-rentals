
const SignUp = require('../models/signUp');

const signUp = async (req, res) => {
    console.log(req.body);
    const sign_up = new SignUp(req.body);
    const result = await SignUp.find({ email: req.body.email });
    console.log(result)
    try {
        if (req.body.password !== req.body.repeat_password) {
            res.send('<h1>Passwords do not match!</h1>');
            res.redirect('/signUp');
        }
        
        if (result.length === 0) {
            await sign_up.save()
            .then((result) => {
                console.log('User signed up successfully',result);
                res.redirect('/car');
        })
        .catch((err) => {
            console.log(err);
        });
    }
    else {
        res.send('<h1>A User with this email exists!</h1>');
    }
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
            
            res.redirect('/car');
        } else {
            
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