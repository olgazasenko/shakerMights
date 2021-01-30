const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {type: String, required: true},
	userType: {type: String, required: true, enum: ['Admin', 'BrandUser']}
});

const User = mongoose.model('User', UserSchema);