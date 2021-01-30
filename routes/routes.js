const productController = require('../controllers/controller');

exports.routesConfig = function (app) {
	app.get('/brands/:brandId/products/:filter', productController.getProducts);
};
