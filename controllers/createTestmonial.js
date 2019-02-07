const testmonial = require('../databases/models/testmonial');

const createTestmonial = (req, res) =>{
    const {email, experience, image} = req.body;
    testmonial.create({email, experience, image}, (error, testmonial) =>{
        res.redirect('/')
        console.log(testmonial)
    })
}
module.exports = createTestmonial;