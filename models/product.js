const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// did not explicitly include id, because every object has an _id in MongoDB
const ProductSchema = new Schema({
	name: {type: String, required: true, minlength: 3},
	price: {type: Number, required: true},
	img: {
		height: Number,
		width: Number,
		src: {type: String, required: true} // URI to the file storage, such as GridFS
	},
	brand: {type: Schema.Types.ObjectId, ref: 'Brand', required: true},
	children: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Product = mongoose.model('Product', ProductSchema);