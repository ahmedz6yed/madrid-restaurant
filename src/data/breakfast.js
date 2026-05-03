import beans from "../assets/break-fast/beans.jpg";
import beggBeans from "../assets/break-fast/begg-beans.jpg";
import boiledEggs from "../assets/break-fast/boiled-eggs.png";
import eggsBastrma from "../assets/break-fast/eggs-bastrma.jpg";
import eggsBeans from "../assets/break-fast/eggs-beans.jpg";
import friesCheeder from "../assets/break-fast/fries-cheeder.jpg";
import hotBeans from "../assets/break-fast/hot-beans.jpg";
import ketFries from "../assets/break-fast/ket-fries.jpg";
import mionizFries from "../assets/break-fast/mioniz-fries.jpg";
import mkFries from "../assets/break-fast/mk-fries.jpg";
import omlet from "../assets/break-fast/omlet.jpg";
import pickle from "../assets/break-fast/pickle.jpg";
import romiFries from "../assets/break-fast/romi-fries.jpg";
import splitImage3 from "../assets/break-fast/split-image-3.jpg";
import tahinSaladFries from "../assets/break-fast/tahin-salad-fries.png";

export const menuItems = [
  // 🫘 فول
  {
    id: 1,
    img: beans,
    Name: "سندوتش فول",
    Description: "فول بلدي متبل بزيت وكمون",
    price: 11,
  },
  {
    id: 2,
    img: hotBeans,
    Name: "سندوتش فول زيت حار",
    Description: "فول بزيت حار ولمسة شطة",
    price: 12,
  },
  {
    id: 3,
    img: eggsBeans,
    Name: "سندوتش فول بالبيض المقلي",
    Description: "فول مع بيض مقلي طازة",
    price: 18,
  },
  {
    id: 4,
    img: beggBeans,
    Name: "سندوتش فول بالبيض المسلوق",
    Description: "فول مع بيض مسلوق وبهارات",
    price: 18,
  },

  // 🍟 بطاطس
  {
    id: 5,
    img: tahinSaladFries,
    Name: "سندوتش بطاطس بالسلطة والطحينة",
    Description: "بطاطس مقرمشة مع طحينة وسلطة",
    price: 12,
  },
  {
    id: 6,
    img: ketFries,
    Name: "سندوتش بطاطس كاتشب",
    Description: "بطاطس مع كاتشب كلاسيك",
    price: 15,
  },
  {
    id: 7,
    img: mionizFries,
    Name: "سندوتش بطاطس مايونيز",
    Description: "بطاطس مع مايونيز كريمي",
    price: 15,
  },
  {
    id: 8,
    img: romiFries,
    Name: "سندوتش بطاطس بالجبنة الرومي",
    Description: "بطاطس مع جبنة رومي سايحة",
    price: 16,
  },
  {
    id: 9,
    img: mkFries,
    Name: "سندوتش بطاطس كاتشب ومايونيز",
    Description: "بطاطس مع كاتشب ومايونيز",
    price: 12,
  },

  // 🧀 إضافات جديدة
  {
    id: 10,
    img: friesCheeder,
    Name: "سندوتش بطاطس جبنة شيدر",
    Description: "بطاطس مع صوص جبنة شيدر",
    price: 15,
  },

  // 🥚 بيض
  {
    id: 11,
    img: boiledEggs,
    Name: "سندوتش بيض مسلوق",
    Description: "بيض مسلوق مع بهارات خفيفة",
    price: 12,
  },
  {
    id: 12,
    img: splitImage3,
    Name: "سندوتش بيض مقلي",
    Description: "بيض مخفوق طري ومتبل",
    price: 13,
  },
  {
    id: 13,
    img: omlet,
    Name: "سندوتش بيض اسكندراني",
    Description: "بيض بطريقة اسكندراني مميزة",
    price: 14,
  },
  {
    id: 14,
    img: eggsBastrma,
    Name: "سندوتش بيض بسطرمة",
    Description: "بيض مع بسطرمة بطعم غني",
    price: 18,
  },

  // 🥒 طبق
  {
    id: 15,
    img: pickle,
    Name: "طبق مخلل",
    Description: "تشكيلة مخللات بلدي",
    price: 8,
  },
];
