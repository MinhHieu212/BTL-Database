export const productList = [
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Tai nghe không dây",
    price: 80,
    discount: "8%",
    category: "Electronics",
    rating: 4.2,
    stock: 40,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sách 'Tôi tài giỏi, bạn cũng thế'",
    price: 15,
    discount: "2%",
    category: "Books",
    rating: 4.7,
    stock: 60,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Giày nam",
    price: 100,
    discount: "10%",
    category: "Fashion",
    rating: 4.5,
    stock: 50,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Áo thun nữ",
    price: 25,
    discount: "5%",
    category: "Fashion",
    rating: 4.0,
    stock: 30,
  },
];

export const discounts = [
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
