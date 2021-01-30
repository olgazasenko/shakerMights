const Product = require('../models/product');

exports.getProducts = (req, res) => {
	const brandId = req.params.brandId;
	const filter = req.params.filter;
	switch (filter) {
		case 'All':
			return res.status(200).send(products);
			break;
		case 'Parents':
			const parents = products.filter(product => product.children.length > 0);
			return res.status(200).send(parents);
			break;
		case 'Children':
			const children = products.filter(product => product.children.length === 0);
			return res.status(200).send(children);
			break;
		default:
			return res.status(400).send("Unrecognized filter type");
	}
};

const products = [
	{
		id: "product1",
		name: "Dope Socks",
		img: "imageURI1",
		brand: "Shike Band",
		children: []
	},
	{
		id: "product2",
		name: "Cool Pants",
		img: "imageURI2",
		brand: "Shike Band",
		children: []
	},
	{
		id: "product3",
		name: "Sweet Hat",
		img: "imageURI3",
		brand: "Shike Band",
		children: ["product4"]
	},
	{
		id: "product4",
		name: "Red Ribbon",
		img: "imageURI4",
		brand: "Shike Band",
		children: []
	}
];