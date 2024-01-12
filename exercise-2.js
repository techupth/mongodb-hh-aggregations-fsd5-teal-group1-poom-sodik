// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_amout: { $sum: "$total_price" },
      totle_quantity: { $sum: "$quantity" },
    },
  },
]);
