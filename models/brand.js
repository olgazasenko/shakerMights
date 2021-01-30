const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
	name: {type: String, required: true, minlength: 3},
	description: String,
	products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Brand = mongoose.model('Brand', BrandSchema);