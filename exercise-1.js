// Paste the complete MQL here
db.pizzaOrders.aggregate([
  { $group: { _id: "$credit_card_type", totalpaid: { $sum: "$total_price" } } },
]);
// {
//     _id: null,
//     totalpaid: 3675211.52
//   }
//   {
//     _id: 'mastercard',
//     totalpaid: 1432896.81
//   }
