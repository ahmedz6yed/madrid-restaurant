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
//--------------------------------------Feni Items
import cottageFeno from "../assets/sandwitches/cottage-feno.png";
// import kiriRomi from "../assets/sandwitches/kiri-romi.png";
// import lanchonSalad from "../assets/sandwitches/lanchon-salad.png";
// import lanchon from "../assets/sandwitches/lanchon.png";
// import skalansClean from "../assets/sandwitches/skalans-clean.png";
import kiri from "../assets/sandwitches/kiri.png";
import cheeder from "../assets/sandwitches/cheeder.png";
import tomatosCheese from "../assets/sandwitches/tomatos-cheese.png";
import turkey from "../assets/sandwitches/turkey.png";
import tuna_salad from "../assets/sandwitches/tuna-salad.png";
import allInOne from "../assets/sandwitches/all-in-one.png";

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
    Name: "ساندوتش كله في واحد",
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
