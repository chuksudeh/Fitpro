const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./databases/models/user');
const expressEdge = require('express-edge');
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const registerUser = require('./controllers/registerUser');
const loginUser = require('./controllers/loginUser');
const MongoStore = connectMongo(expressSession);
const flash = require('express-flash-messages');
const fileUpload = require('express-fileupload');
const createTestmonial = require('./controllers/createTestmonial')
const auth = require('./middlewares/auth')
const brost = require('./controllers/brost')


const app = express();
mongoose.connect("mongodb://localhost/auth", { useNewUrlParser: true }, () =>{
    console.log('Successfully connected to Mongoose')
});
app.use(fileUpload());
app.use(expressSession({
    secret: 'secret',
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    
  }))
  app.use(flash())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(expressEdge);
app.set('views', `${__dirname}/views`)




app.get('/', (req, res) => {
    req.flash('notify', 'This is a test notification.')
    res.render('index')
})
app.post('/brost', brost)
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/abs', (req, res) => {
    res.render('abs', req.session.user)
})
app.get('/food', auth, (req, res) => {
    res.render('food')
})
app.get('/food1', (req, res) => {
    res.render('food1')
})
app.get('/brost', (req, res) => {
    res.render('brost')
  })
app.get('/home', (req, res) =>{
    res.render('home')
})
app.get('/register', (req,res) => {
    res.render('register')
})
app.post('/register', registerUser)
app.get('/login', (req,res) =>{
    res.render('login')
})
app.get('/contact', (req,res) =>{
    res.render('contact')
})
app.post('/login', loginUser, (email, passowrd) =>{
    
})
app.get('/facts', (req, res) => {
    res.render('facts')
})
app.post('/testmonial', createTestmonial)
app.get('/contact', (req, res) => {
    res.render('contact')
})

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`)
});