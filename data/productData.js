const productData = [
  {
    id: 1,
    image: "/media/product1.png",
    alt: "dress",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 30.0,
    color: ["black", "white", "red"],
  },
  {
    id: 2,
    image: "/media/shirt.png",
    alt: "shirt",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 40.0,
    color: ["red", "white", "black"],
  },
  {
    id: 3,
    image: "/media/product3.png",
    alt: "bag",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 25.0,
    color: ["white", "black", "red"],
  },
  {
    id: 4,
    image: "/media/shoes.png",
    alt: "Shoes",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 10.0,
    color: ["white", "black", "red"],
  },
  {
    id: 5,
    image: "/media/213.jpg",
    alt: "watch",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 130.0,
    color: ["white", "black", "red"],
  },
  {
    id: 6,
    image: "/media/2.jpg",
    alt: "Head phone",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 40.0,
    color: ["white", "black", "red"],
  },
  {
    id: 7,
    image: "/media/3.jpg",
    alt: "Shoes",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 60.0,
    color: ["white", "black", "red"],
  },
  {
    id: 8,
    image: "/media/4.jpg",
    alt: "Watch",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },

  {
    id: 9,
    image: "/media/bag1.jpg",
    alt: "Long Bag",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },

  {
    id: 10,
    image: "/media/shirt1.jpg",
    alt: "Warm Shirts",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },

  {
    id: 11,
    image: "/media/shirt2.jpg",
    alt: "705 Shirt",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },

  {
    id: 12,
    image: "/media/bag2.jpg",
    alt: "Blue Bag",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 13,
    image: "/media/head.jpg",
    alt: "Head Set",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 14,
    image: "/media/bag3.jpg",
    alt: "Leather Bag",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 15,
    image: "/media/bag4.jpg",
    alt: "Linen Bag",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 16,
    image: "/media/shirt3.jpg",
    alt: "Dot Shirt",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 17,
    image: "/media/shoes1.jpg",
    alt: "Puma Shoes",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 18,
    image: "/media/watch1.jpg",
    alt: "Watch 12",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 19,
    image: "/media/shoes2.jpg",
    alt: "Woman Shoes",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 20,
    image: "/media/watch2.jpg",
    alt: "1459 Watch",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 21,
    image: "/media/shoes3.jpg",
    alt: "Red Shoes",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  {
    id: 22,
    image: "/media/watch3.jpg",
    alt: "Apple Watch",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
  ,
  { 
    id: 23,
    image: "/media/watch4.jpg",
    alt: "Watch 23",
    info: "Lorem ipsum dolor sit amet. Aut corporis sequi sed deleniti dicta a voluptatem dolorem est eveniet doloremque vel molestias sunt quo iure numquam in esse velit. Et voluptas labore rem tempora dolores aut fugit excepturi est minus accusantium aut nulla quia non atque molestiae qui porro quidem!",
    price: 100.0,
    color: ["white", "black", "red"],
  },
];

export default productData;
