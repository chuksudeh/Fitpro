const bcrypt = require ('bcrypt')
const User = require('../databases/models/user')


module.exports = (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    User.create({ username, email, password: hashedPassword }, (error, user) => {
      res.redirect("/login");
      console.log(user)
    });
}