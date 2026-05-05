import beans from "../../public/break-fast/beans.webp";
import beggBeans from "../../public/break-fast/begg-beans.webp";
import boiledEggs from "../../public/break-fast/boiled-eggs.webp";
import eggsBastrma from "../../public/break-fast/eggs-bastrma.webp";
import eggsBeans from "../../public/break-fast/eggs-beans.webp";
import friesCheeder from "../../public/break-fast/fries-cheeder.webp";
import hotBeans from "../../public/break-fast/hot-beans.webp";
import ketFries from "../../public/break-fast/ket-fries.webp";
import mionizFries from "../../public/break-fast/mioniz-fries.webp";
import mkFries from "../../public/break-fast/mk-fries.webp";
import omlet from "../../public/break-fast/omlet.webp";
import pickle from "../../public/break-fast/pickle.webp";
import romiFries from "../../public/break-fast/romi-fries.webp";
import splitImage3 from "../../public/break-fast/split-image-3.webp";
import tahinSaladFries from "../../public/break-fast/tahin-salad-fries.webp";
//--------------------------------------Feni Items
import cottageFeno from "../../public/sandwitches/cottage-feno.webp";
// import kiriRomi from "../../public/sandwitches/kiri-romi.webp";
// import lanchonSalad from "../../public/sandwitches/lanchon-salad.webp";
// import lanchon from "../../public/sandwitches/lanchon.webp";
// import skalansClean from "../../public/sandwitches/skalans-clean.webp";
import kiri from "../../public/sandwitches/kiri.webp";
import cheeder from "../../public/sandwitches/cheeder.webp";
import tomatosCheese from "../../public/sandwitches/tomatos-cheese.webp";
import turkey from "../../public/sandwitches/turkey.webp";
import tuna_salad from "../../public/sandwitches/tuna-salad.webp";
import allInOne from "../../public/sandwitches/all-in-one.webp";

export const menuItems = [
  // 🫘 فول
  {
    id: 1,
    img: beans,
    Name: "سندوتش فول",
    Description: "فول بلدي متبل بزيت وكمون",
    price: 11,
    type: "بلدي",
  },
  {
    id: 2,
    img: hotBeans,
    Name: "سندوتش فول زيت حار",
    Description: "فول بزيت حار ولمسة شطة",
    price: 12,
    type: "بلدي",
  },
  {
    id: 3,
    img: eggsBeans,
    Name: "سندوتش فول بالبيض المقلي",
    Description: "فول مع بيض مقلي طازة",
    price: 18,
    type: "بلدي",
  },
  {
    id: 4,
    img: beggBeans,
    Name: "سندوتش فول بالبيض المسلوق",
    Description: "فول مع بيض مسلوق وبهارات",
    price: 18,
    type: "بلدي",
  },

  // 🍟 بطاطس
  {
    id: 5,
    img: tahinSaladFries,
    Name: "سندوتش بطاطس بالسلطة والطحينة",
    Description: "بطاطس مقرمشة مع طحينة وسلطة",
    price: 12,
    type: "بلدي",
  },
  {
    id: 6,
    img: ketFries,
    Name: "سندوتش بطاطس كاتشب",
    Description: "بطاطس مع كاتشب كلاسيك",
    price: 15,
    type: "بلدي",
  },
  {
    id: 7,
    img: mionizFries,
    Name: "سندوتش بطاطس مايونيز",
    Description: "بطاطس مع مايونيز كريمي",
    price: 15,
    type: "بلدي",
  },
  {
    id: 8,
    img: romiFries,
    Name: "سندوتش بطاطس بالجبنة الرومي",
    Description: "بطاطس مع جبنة رومي سايحة",
    price: 25,
    type: "بلدي",
  },
  {
    id: 9,
    img: mkFries,
    Name: "سندوتش بطاطس كاتشب ومايونيز",
    Description: "بطاطس مع كاتشب ومايونيز",
    price: 16,
    type: "بلدي",
  },

  // 🧀 إضافات جديدة
  {
    id: 10,
    img: friesCheeder,
    Name: "سندوتش بطاطس جبنة شيدر",
    Description: "بطاطس مع صوص جبنة شيدر",
    price: 20,
    type: "بلدي",
  },

  // 🥚 بيض
  {
    id: 11,
    img: boiledEggs,
    Name: "سندوتش بيض مسلوق",
    Description: "بيض مسلوق مع بهارات خفيفة",
    price: 13,
    type: "بلدي",
  },
  {
    id: 12,
    img: splitImage3,
    Name: "سندوتش بيض مقلي",
    Description: "بيض مخفوق طري ومتبل",
    price: 13,
    type: "بلدي",
  },
  {
    id: 13,
    img: omlet,
    Name: "سندوتش بيض اسكندراني",
    Description: "بيض بطريقة اسكندراني مميزة",
    price: 15,
    type: "بلدي",
  },
  {
    id: 14,
    img: eggsBastrma,
    Name: "سندوتش بيض بسطرمة",
    Description: "بيض مع بسطرمة بطعم غني",
    price: 22,
    type: "بلدي",
  },

  // 🥒 طبق
  {
    id: 15,
    img: pickle,
    Name: "طبق مخلل",
    Description: "تشكيلة مخللات بلدي",
    price: 5,
    type: "بلدي",
  },
  //-------------------------------------------feno --------------
  {
    id: 1,
    img: tuna_salad,
    Name: "سلطة تونة ",
    Description: "ساندوتش سلطة تونة بالخضار",
    price: 17,
    type: "فينو",
  },
  {
    id: 2,
    img: kiri,
    Name: "جبنة كيري ",
    Description: "ساندوتش جبنة كيري",
    price: 25,
    type: "فينو",
  },
  {
    id: 3,
    img: cheeder,
    Name: "جبنة شيدر ",
    Description: "ساندوتش جبنة شيدر",
    price: 20,
    type: "فينو",
  },
  // {
  //   id: 2,
  //   img: kiriRomi,
  //   Name: "كيري بالرومي",
  //   Description: "سندوتش جبنة كيري مع رومي",
  //   price: 20,
  //   type: "فينو",
  // },
  // {
  //   id: 3,
  //   img: lanchonSalad,
  //   Name: "سلطة لانشون",
  //   Description: "سندوتش لانشون مع سلطة",
  //   price: 15,
  //   type: "فينو",
  // },
  // {
  //   id: 4,
  //   img: lanchon,
  //   Name: "لانشون",
  //   Description: "سندوتش لانشون",
  //   price: 12,
  //   type: "فينو",
  // },
  // {
  //   id: 5,
  //   img: skalansClean,
  //   Name: "سكالانس",
  //   Description: "سندوتش سكالانس حلاوة مربة قشطه",
  //   price: 25,
  //   type: "فينو",
  // },
  {
    id: 6,
    img: tomatosCheese,
    Name: "جبنة بالطماطم",
    Description: "سندوتش جبنة بالطماطم",
    price: 16,
    type: "فينو",
  },
  {
    id: 7,
    img: turkey,
    Name: "جبنه رومي",
    Description: "سندوتش جبنه رومي",
    price: 20,
    type: "فينو",
  },
  {
    id: 8,
    img: allInOne,
    Name: "ساندوتش كله في رغيف",
    Description: "لانشون , جبنه رومي , جبنه كيري ,جبنه شيدر",
    price: 25,
    type: "فينو",
  },
  {
    id: 9,
    img: cottageFeno,
    Name: "جبنة قريش",
    Description: "سندوتش جبنة قريش",
    price: 15,
    type: "فينو",
  },
];
