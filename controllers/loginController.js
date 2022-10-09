const isLogued = (req, res, next) => {
  const name = req.session.name;
  name ? next() : res.redirect('http://localhost:8080/logout');
};

const handleLogout = (req, res) => {
  res.redirect('http://localhost:8080/login');
};

const login = (req, res) => {
  res.status(200).render('mainLogin');
};

const handleLogin = (req, res) => {
  const { name } = req.body;
  req.session.name = name;
  res.status(200).redirect('/api/products-test');
};

module.exports = { login, handleLogin, isLogued, handleLogout };
