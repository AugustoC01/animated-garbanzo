const createFakeProducts = require('../mocks/productsGenerator');

const getProducts = (req, res) => {
  let products = createFakeProducts(4);
  res.render('mainProducts', {
    products: products,
    name: req.session.name,
  });
};

module.exports = getProducts;
