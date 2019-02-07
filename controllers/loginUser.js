const bcrypt = require('bcrypt')
const user = require('../databases/models/user')


loginUser = (req, res) => {
    const { email, password } = req.body;

    user.findOne({ email }, (error, user) => {
      if (user) {
        const passwordIsCorrect = bcrypt.compareSync(password, user.password);
  
        if (passwordIsCorrect) {
          req.session.user = user;
  
          return res.redirect('/home');
        } else {
          console.log('wrong password')
          return res.redirect("/login");
        }
      } else {
        // console.log('no user')
        req.flash('notify', 'no user');
        return  res.redirect("/login")
       
      }
    });
}
module.exports = loginUser;