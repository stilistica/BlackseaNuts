import img1 from "../../img/components/products/image-1.webp";
import img2 from "../../img/components/products/image-2.webp";
import img3 from "../../img/components/products/image-3.webp";
import img4 from "../../img/components/products/image-4.webp";
import img5 from "../../img/components/products/image-5.webp";
import img6 from "../../img/components/products/image-6.webp";

export const productsData = [
  {
    id: "0091",
    name: "Грецкий орех",
    desc: "Орех сладкий, классический, очищенный",
    weight: 40,
    package: "вакуумная",
    price: 19,
    images: [img1, img1],
    promo: {
      type: "sale",
      oldPrice: "21 грн.",
    },
    taste: "classic",
  },
  {
    id: "0092",
    name: "Орех грецкий очищенный",
    desc: "Ядра грецкого ореха премиум-качества.",
    weight: 60,
    package: "крафтовая",
    price: 28,
    images: [img2, img2],
    promo: {
      type: "new",
    },
    taste: "sweet",
  },
  {
    id: "0093",
    name: "Микс орехов",
    desc: "Сочетание фундука, миндаля и грецкого ореха.",
    weight: 30,
    package: "крафтовая",
    price: 18,
    images: [img3, img3],
    taste: "salty",
  },
  {
    id: "0191",
    name: "Грецкий орех",
    desc: "Орех сладкий, классический, очищенный",
    weight: 80,
    package: "вакуумная",
    price: 42,
    images: [img4, img4],
    taste: "classic",
  },
  {
    id: "0192",
    name: "Орех грецкий очищенный",
    desc: "Ядра грецкого ореха премиум-качества.",
    weight: 120,
    package: "крафтовая",
    price: 56,
    images: [img5, img5],
    taste: "sweet",
  },
  {
    id: "0193",
    name: "Микс орехов",
    desc: "Сочетание фундука, миндаля и грецкого ореха.",
    weight: 60,
    package: "крафтовая",
    price: 36,
    images: [img6, img6],
    taste: "salty",
  },
];
