export const discountList = [
  {
    id_discount: 1,
    date_start: "2023-01-01",
    date_end: "2023-12-31",
    discountPercent: 10,
    maxDiscount: 50,
    minBill: 100,
    id_category: 1,
    quantity: 100,
    discountMoney: null, // Nếu chiết khấu theo phần trăm, giữ nguyên là null
    discountType: "percent", // Hoặc 'money' nếu chiết khấu theo số tiền
  },
  {
    id_discount: 2,
    date_start: "2023-03-15",
    date_end: "2023-03-31",
    discountPercent: null, // Nếu chiết khấu theo số tiền, giữ nguyên là null
    maxDiscount: null, // Nếu không có hạn chế về số tiền tối đa
    minBill: 50,
    id_category: 2,
    quantity: 50,
    discountMoney: 20,
    discountType: "money",
  },
  {
    id_discount: 3,
    date_start: "2023-03-15",
    date_end: "2023-03-31",
    discountPercent: null, // Nếu chiết khấu theo số tiền, giữ nguyên là null
    maxDiscount: null, // Nếu không có hạn chế về số tiền tối đa
    minBill: 30,
    id_category: 2,
    quantity: 30,
    discountMoney: 10,
    discountType: "money",
  },
  {
    id_discount: 4,
    date_start: "2023-01-01",
    date_end: "2023-12-31",
    discountPercent: 10,
    maxDiscount: 50,
    minBill: 100,
    id_category: 1,
    quantity: 100,
    discountMoney: null, // Nếu chiết khấu theo phần trăm, giữ nguyên là null
    discountType: "percent", // Hoặc 'money' nếu chiết khấu theo số tiền
  },
  // Thêm các đối tượng discount khác nếu cần
];
