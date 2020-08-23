var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpellSchema = new Schema({
  index: String,
  name: String,
  url: String
});

module.exports = mongoose.model('Spell', SpellSchema, 'spells');
