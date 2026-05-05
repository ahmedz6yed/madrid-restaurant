import friesSori from "../../public/sori/fries.webp";
import paneSori from "../../public/sori/pane-sori.webp";
import stripsSori from "../../public/sori/strips-sori.webp";
import fahitaSori from "../../public/sori/fahita-sori.webp";
import kebdaSori from "../../public/sori/kebda-sori.webp";
import zingerSori from "../../public/sori/zinger-sori.webp";
import soqoqSori from "../../public/sori/sogoq-sori.webp";
import hotDogSori from "../../public/sori/hotdog-sori.webp";

//-----------------------------------
import fahitabaladi from "../../public/baladi-lunch/fahita-baladi.webp";
import hotDog from "../../public/baladi-lunch/hot-dog-baladi.webp";
import paneBaladi from "../../public/baladi-lunch/pane-baladi.webp";
import Sogoq from "../../public/baladi-lunch/sogoq-baladi.webp";
import kebdabaladi from "../../public/baladi-lunch/kebda-baladi.webp";
//-----------------------creps ---------------------------------
import kebdacrep from "../../public/creps/kebda.webp";
import stripscrep from "../../public/creps/strip-crep.webp";
import sogoqcrep from "../../public/creps/sogoq.webp";
import fahitacrep from "../../public/creps/fahita-crep.webp";

import hotDogCrep from "../../public/creps/hot-dog.webp";
import friesCrep from "../../public/creps/fries.webp";
import panecrep from "../../public/creps/pane-crep.webp";
import zingercrep from "../../public/creps/zinger.webp";

export const lunchMeals = [
  {
    img: friesSori,
    Name: "بطاطس سوري",
    Description: "بطاطس , عيش سوري , تومية , خيار مخلل ",
    price: 25,
    type: "سوري",
  },
  {
    img: paneSori,
    Name: "بانيه ",
    Description: "بانيه، ميكس جبن، صوص",
    price: 45,
    type: "سوري",
  },
  {
    img: stripsSori,
    Name: "وجبة ستربس سوري",
    Description: "ستربس، ميكس جبن، صوص",
    price: 50,
    type: "سوري",
  },
  {
    img: fahitaSori,
    Name: " فاهيتا",
    Description: "فاهيتا فراخ , عيش سوري , رانش صوص و مسطردة , خضار اختياري",
    price: 45,
    type: "سوري",
  },
  {
    img: zingerSori,
    Name: " زنجر ",
    Description: "زنجر , عيش سوري , رانش صوص و صوص جبن , خضار اختياري",
    price: 55,
    type: "سوري",
  },
  {
    img: kebdaSori,
    Name: " كبدة اسكندراني",
    Description: "كبدةاسكندراني, عيش سوري , طحينه ,صوص فلفل وليمون ",
    price: 25,
    type: "سوري",
  },
  {
    img: soqoqSori,
    Name: "سجق ",
    Description: "سجق بلدي , عيش سوري , كاتشب ",
    price: 25,
    type: "سوري",
  },
  {
    img: hotDogSori,
    Name: "هوت دوج ",
    Description: "هوت دوج، كاتشب، مستردة , عيش سوري",
    price: 30,
    type: "سوري",
  },

  //-----------------------------------
  {
    img: fahitabaladi,
    Name: "ساندوتش فاهيتا ",
    Description: "فراخ فاهيتا , عيش بلدي , صوص رانش ,خصار",
    price: 40,
    type: "بلدي",
  },
  {
    img: paneBaladi,
    Name: "ساندوتش بانيه ",
    Description: "بانيه، ميكس جبن، صوص",
    price: 40,
    type: "بلدي",
  },
  // {
  //   img: friesRomi,
  //   Name: "ساندوتش بطاطس جبنه رومي",
  //   Description: "بطاطس ,جبنه رومي , عيش بلدي ,كاتشب ",
  //   price: 25,
  //   type: "بلدي",
  // },
  {
    img: kebdabaladi,
    Name: "ساندوتش كبدة اسكندراني",
    Description: "كبدةاسكندراني , عيش بلدي , طحينه ,صوص فلفل وليمون ",
    price: 20,
    type: "بلدي",
  },
  {
    img: Sogoq,
    Name: "ساندوتش سجق بلدي",
    Description: "سجق, عيش بلدي  ,صوص فلفل وليمون ",
    price: 20,
    type: "بلدي",
  },
  {
    img: hotDog,
    Name: "ساندوتش هوت دوج",
    Description: "هوت دوج , عيش بلدي ,كاتشب و مستردة ",
    price: 25,
    type: "بلدي",
  },
  //------------------------------creps
  {
    img: friesCrep,
    Name: "كريب بطاطس",
    Description: "بطاطس محمرة، كاتشب، مايونيز، ميكس جبن",
    price: 39.99,
    type: "كريب",
  },
  {
    img: kebdacrep,
    Name: "كريب كبدة اسكندراني",
    Description: "كبدة اسكندراني، طحينة، صوص فلفل وليمون",
    price: 54.99,
    type: "كريب",
  },

  {
    img: stripscrep,
    Name: "كريب ستربس",
    Description: "قطع ستربس مقرمشة، صوص جبن، رانش",
    price: 74.99,
    type: "كريب",
  },
  {
    img: zingercrep,
    Name: "كريب زنجر",
    Description: "زنجر، ميكس جبن، صوص تايجر",
    price: 74.99,
    type: "كريب",
  },
  {
    img: sogoqcrep,
    Name: "كريب سجق",
    Description: "سجق بلدي، خضار، صوص مدريد الخاص",
    price: 54.99,
    type: "كريب",
  },
  {
    img: fahitacrep,
    Name: "كريب فاهيتا فراخ",
    Description: "صدور دجاج فاهيتا، فلفل ألوان، صوص رانش",
    price: 79.99,
    type: "كريب",
  },
  {
    img: hotDogCrep,
    Name: "كريب هوت دوج",
    Description: "هوت دوج، كاتشب، مستردة، صوص جبن",
    price: 54.99,
    type: "كريب",
  },

  {
    img: panecrep,
    Name: "كريب فراخ بانيه",
    Description: "قطع دجاج بانيه، صوص تايجر، خضار",
    price: 79.99,
    type: "كريب",
  },
];
//بان
