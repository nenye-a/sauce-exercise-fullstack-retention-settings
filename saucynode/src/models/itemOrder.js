const { mongoose, Schema } = require('../utils/mongoose');
const itemOrderCollectionName = ''; // TODO: Please enter your collection name

/**
 * Mongoose used to structure itemorders database in node. Not used in python
 * But structure can be modified in either.
 */
const ItemOrder = new Schema({
  platform: { type: String, index: true },
  name: { type: String, index: 1 },
  purchasePrice: Number,
  purchasedQuantity: Number,
  platformItemId: { type: String, index: 1 },
  platformCustomerId: { type: String, index: 1 },
  purchaseDateTime: { type: Date, index: 1 },
  orderId: mongoose.Types.ObjectId,
  testId: { type: mongoose.Types.ObjectId, ref: 'priceSplit' },
  testStatus: { type: String, enum: ['control', 'experiment', null] },
});

ItemOrder.index({
  platform: 1,
  store: 1,
});

ItemOrder.index({
  platform: 1,
  store: 1,
  purchaseDateTime: 1,
});

ItemOrder.statics.findByPlatformId = function(id) {
  return this.findOne({ platformItemId: id });
};

const itemOrders = mongoose.model(itemOrderCollectionName, ItemOrder);

module.exports = itemOrders;
