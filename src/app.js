const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');

//intitializations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views') , 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, res, db) => {
        cb(null, new Date.getTime() + path.extname(ile.originalname));
    }
});
app.use(multer({ storage }).single('image'));

//Routes
app.use(require('./routes'));

module.exports = app;