import friesSori from "../assets/sori/fries.png"
import paneSori from "../assets/sori/pane-sori.png"
import stripsSori from "../assets/sori/strips-sori.png"
import fahitaSori from "../assets/sori/fahita.png"
import kebdaSori from "../assets/sori/kebda.png"



export const lunchMeals = [
    {
        img: friesSori,
        Name: 'وجبة بطاطس',
        Description: 'بطاطس، ميكس جبن، صوص',
        price: 109.99,
        type:'سوري'
    },
    {
        img: paneSori,
        Name: 'وجبة بان سوري',
        Description: 'بان، ميكس جبن، صوص',
        price: 139.99,
        type:'سوري'
    },
    {
        img: stripsSori,
        Name: 'وجبة ستربس سوري',
        Description: 'ستربس، ميكس جبن، صوص',
        price: 129.99,
        type:'سوري'
    },
    {
        img: fahitaSori,
        Name: 'شاورما فاهيتا',
        Description: 'فاهيتا فراخ , عيش سوري , رانش صوص و مسطردة , خضار اختياري',
        price : 99.99,
        type: "سوري"
    }
    ,
    {
        img: kebdaSori,
        Name: 'شاورما كبدة اسكندراني',
        Description:'كبدةاسكندراني, عيش سوري , طحينه ,صوص فلفل وليمون ',
        price : 99.99,
        type: "سوري"
    }

]