const User = require('../models/User');

const SignUp = async (req, res) => {
    if(req.body) {
        const User = new User(req.body);
        await User.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

module.exports = {
   SignUp
}