// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: {
        year: { $year: "$created_at" },
        month: { $month: "$created_at" },
      },
      total_sales: { $sum: "$total_price" },
    },
  },
  { $match: { "_id.month": 7 } },
]);
