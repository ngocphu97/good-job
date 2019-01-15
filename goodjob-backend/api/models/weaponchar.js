const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema and model

const WeaponSchema = new Schema({
    name: String,
    image: String,
    type: String,
    describe: String
});

const WeaponSchema = mongoose.model('weapon', WeaponSchema);

module.exports = WeaponSchema;
