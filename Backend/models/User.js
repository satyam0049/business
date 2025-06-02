const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  socketId: { type: String, required: true, unique: true },
  connectedAt: { type: Date, default: Date.now },
  disconnectedAt: { type: Date },
  isConnected: { type: Boolean, default: true }
});



module.exports = mongoose.model('User', userSchema);
