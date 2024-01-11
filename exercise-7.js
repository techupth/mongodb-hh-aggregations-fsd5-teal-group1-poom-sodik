// Paste the complete MQL here
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: {
        year: { $year: "$created_at" },
        month: { $month: "$created_at" },
      },
      total_sales_by_month: { $sum: "$total_price" },
    },
  },
  {
    $sort: {
      total_sale_by_month: 1,
    },
  },
  { $limit: 1 },
]);
