const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const notImplemented = require('./controllers/checkController');
const { isLogued } = require('./controllers/loginController');
const prodsRouter = require('./routers/products');
const loginRouter = require('./routers/login');
const logoutRouter = require('./routers/logout');

//IMPLEMENTACION DE IO
const socketConnection = require('./utils/socket.io');
const httpServer = require('http').createServer(app);
const session = require('express-session');
socketConnection(httpServer);

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.use(
  session({
    secret: 'A secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30000,
    },
  })
);
// ROUTERS
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/api/products-test', isLogued, prodsRouter);
// ATRAPA RUTAS NO IMPLEMENTADAS
app.use(notImplemented);

// HBS CONFIG
app.set('view engine', 'hbs');
app.set('views', './views');
app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
  })
);

//SERVER
const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () =>
  console.log(`SERVER ON PORT http://localhost:${PORT}/`)
);

httpServer.on('error', (error) => {
  `Error en el servidor ${error}`;
});
