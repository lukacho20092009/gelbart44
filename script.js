let startX = 0;
let endX = 0;

let currentModalMediaList = []; 
let currentModalIndex = 0;      

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const modal = document.getElementById('modal');
  const isModalOpen = modal && modal.style.display === "block";

  const diffX = endX - startX;

  if (Math.abs(diffX) > 50) { 
    if (isModalOpen && currentModalMediaList.length > 1) { 
        if (diffX > 0) {
            showPrevMedia();
        } else {
            showNextMedia();
        }
    } else {

        if (diffX > 0) {
          window.history.back();
        } else {
          window.history.forward();
        }
    }
}
}

function saveScrollPosition() {

    const scrollPosition = window.scrollY;
    localStorage.setItem('scrollPos', scrollPosition);
    console.log('Scroll position saved:', scrollPosition); 
  }

  function restoreScrollPosition() {
    const savedPosition = localStorage.getItem('scrollPos');
    
    if (savedPosition) {
      const position = parseInt(savedPosition, 10);

      window.scrollTo(0, position);

      localStorage.removeItem('scrollPos');
      console.log('Scroll position restored to:', position); 
      return true;
    }
    return false;
  }

  document.addEventListener('DOMContentLoaded', () => {

    restoreScrollPosition();

    const galleryList = document.getElementById('gallery-list');

    galleryList.addEventListener('click', (event) => {

      const link = event.target.closest('a');

      if (link && link.hasAttribute('href')) {
        saveScrollPosition();
      }
    });
  });

const translations = {
  en: {
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.print": "Print", 
    "nav.order": "Order",
    "nav.about": "About the Artist",
    "hero.title": "David Gelbakhiani Arts",
    "hero.subtitle": "Discover emotional and expressive paintings that capture the essence of color and soul.",
    "hero.cta": "View Gallery",
    "hero.atc":"Contact",
    "nav.print-on-cloth": "Print on Cloth" 
  },
  ka: {
    "nav.home": "მთავარი",
    "nav.gallery": "გალერეა",
    "nav.print": "პრინტი", 
    "nav.order": "შეკვეთა",
    "nav.about": "მხატვარის შესახებ",
    "hero.title": "დავით გელბახიანის ნამუშევრები",
    "hero.subtitle": "აღმოაჩინე ემოციური და უნიკალური ნახატები, რომლებიც გადმოსცემენ სულის ფერებს.",
    "hero.cta": "ნახე გალერეა",
    "hero.atc":"კონტაქტი",
    "nav.print-on-cloth": "ბეჭდვა ქსოვილზე" 
  },
  es: {
    "nav.home": "Casa",
    "nav.gallery": "Galería",
    "nav.print": "Impresión",
    "nav.order": "orden",
    "nav.about": "Acerca del artista",
    "hero.title": "Arte pescante gelbakhiano",
    "hero.subtitle": "Descubre pinturas emocionales y expresivas que capturan la esencia del color y el alma.",
    "hero.cta": "Ver Galería",
    "hero.atc":"Contacto",
    "nav.print-on-cloth": "Impresión en Tela"
  },
  ru: {
    "nav.home": "Главная",
    "nav.gallery": "Галерея",
    "nav.print": "Печать",
    "nav.order": "заказ",
    "nav.about": "Об художнике",
    "hero.title": "Давид Гелбахян искусство",
    "hero.subtitle": "Откройте для себя эмоциональные и выразительные картины, которые передают суть цвета и души.",
    "hero.cta": "Смотреть галерею",
    "hero.atc":"Kонтакт",
    "nav.print-on-cloth": "Печать на Ткани"
  }
};
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) el.innerText = translations[lang][key];
  });
}

const langSelector = document.querySelector('.lang-selector span');

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const lang = e.target.getAttribute("data-lang");

    if (langSelector) {
        langSelector.innerText = e.target.innerText;
    }
    
    setLanguage(lang);
    document.getElementById('lang-popup').style.display = 'none';
  });
});

if (langSelector) {
  langSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    const popup = document.getElementById('lang-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  });
}

document.body.addEventListener('click', () => {
  const popup = document.getElementById('lang-popup');
  if(popup) popup.style.display = 'none';
});

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
  });
}

document.querySelectorAll('nav a, .cta-btn').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
      }
    }
  });
});

// =======================================================================================

const paintings = [
{
  id: 270, 
  title: 'The Escape',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765829400/b36e81d9-bb53-4c32-aee4-4d84d75b8c00_k8iyjc.jpg',
  desc: '"The Escape" canvas. Arcylic. 30X40 In. (122 x 76 cm ). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 269, 
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818301/3bdeb033-9ed5-42e8-8a38-6909194364f0_ykvhq1.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 268, 
  title: 'People are Colorful',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765894895/c3e691_e351711c17c047a4ab814d8a1f02c2c3_mv2_aiezbx.jpg',
  sold: false,
  desc: '"People are Colorful." Acrylic on canvas 100X50 In. (254 × 127 cm)',
  variations: [],
},
{
  id: 267, 
  title: '',
  price: 50,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765817747/966f87a7-96b2-49e9-a2de-da743ec680d9_umbqx9.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 266, 
  title: 'Spy Reaction',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765829400/a9831310-7ba9-477d-bffd-415883ab0ce6_qu4qfg.jpg',
  desc: '"Spy Reaction". Mascara. A3.',
  sold: false,
  variations: [],
},
{
  id: 265, 
  title: 'Friends',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818168/80a4b17b-1772-4eae-b6dd-5e300430b716_kqf6x2.jpg',
  desc: '"Friends". Acrylic on canvas. 100X40 In (254 × 102 cm)',
  sold: true,
  variations: [],
},
{
  id: 264, 
  title: 'Palm',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818026/a76b9229-8223-4c32-b1e4-9673171826bd_oagapx.jpg',
  desc: '"Palm"',
  sold: true,
  variations: [],
},
{
  id: 263, 
  title: 'Amphibian',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765829400/f98d9421-de72-4e9c-a89a-78ceb5df9bee_ltmgyn.jpg',
  desc:'"Amphibian". Oil and  Acrylic. 85X60 In. (216 × 152 cm) ',
  sold: false,
  variations: [],
},
{
  id: 262, 
  title: 'My City',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818225/93f5ee5a-a0ba-48ad-bd90-5f5f2a9d494c_vpgxvg.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 261, 
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818380/4d00b9f1-0d9a-40bd-be59-d133df63ddef_2_nrmsp4.jpg',
  desc: 'Made with sticks and popcorn.',
  sold: true,
  variations: [],
},
{
  id: 260, 
  title: 'Guard',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765829400/a0bd6096-9c86-45e8-bce2-6f18d144323a_vrehsi.jpg',
  desc:'"Guard". Oil.',
  sold: false,
  variations: [],
},
{
  id: 259, 
  title: 'Old City',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765829400/6541c461-3675-4fad-9ddf-c782b3952c66_zlourx.jpg',
  desc: '"Old City". Canvas. 100X80 In. (254 × 203 cm)',
  sold: false,
  variations: [],
},
{
  id: 258, 
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818247/17354924-7029-42bb-8559-a1559482631a_unip97.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 257,
  title: 'Jaguar',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818100/883a2f62-a800-4bb5-befc-12f24913e5a3_f2vfnr.jpg',
  sold: true,
  variations: [],
},
{
  id: 256, 
  title: 'Night and Woman',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818271/92bca025-ade2-45dc-b0b2-7afa785cd4da_plg50j.jpg',
  desc: '"Night and Woman"',
  sold: true,
  variations: [],
},
{
  id: 255, 
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818328/3b027384-27df-4095-9449-9da601261ab6_sp8z5y.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 254, 
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818188/45aa9cef-c7bc-44ea-9fb6-1b0123a026ae_wki2py.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 253, 
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818151/6d06871b-0c83-4696-afaf-dec0f7f32d22_dgqiez.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 252,
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818359/1f05b6f0-b281-4b4d-81cd-48d057366da2_n2mwrf.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 251,
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818210/212c9d96-92c8-4e13-b181-1f5574411171_fiwhwa.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 250,
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818342/eeb49e13-b6d1-491d-9e7a-14fd49a4b67e_e7ftaf.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 249, 
  title: '',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765818286/ac995a97-3d77-4ae8-ad10-af4e9b79bc24_xlvthr.jpg',
  desc: '',
  sold: true,
  variations: [],
},
{
  id: 248, 
  title: '',
  price: 50,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765817994/af106965-c286-4a6e-82d6-065984fd0971_kydrii.jpg',
  desc: '',
  sold: true,
  variations: [],
},

{
  id: 247,
  title: 'Choice',
  price: 850,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050661/495228355_1020392793530659_7329616293878280550_n.jpg_m3urd2.jpg',
  desc: '"Choice". Acrylic. Cardboard. x in. location: USA.',
  sold: false,
  variations: [],
},
{
  id: 246,
  title: 'Fish',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050535/490013663_1001447945425144_8267193951766370608_n.jpg_nybzhr.jpg',
  desc: '"Fish". Acrylic. 24X20 In. (61×51 Cm).location: USA.',
  sold: false,
  variations: [],
},
{
  id: 245,
  title: 'Leave your own',
  price: 950,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050459/485729075_989327923303813_321104010784237805_n.jpg_f9qauh.jpg',
  desc: '"Leave your own". Acrylic. 20X16 In. (51×41 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 244,
  title: 'Crane',
  price: 1400,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050383/484783837_982247337345205_133239070343943402_n.jpg_qni4xo.jpg',
  desc: '"Crane". Acrylic. 47x24 In. (119×61 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 243,
  title: 'Autumn in New York',
  price: 2500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050332/484882558_982244584012147_6472198262883708510_n.jpg_pmlip2.jpg',
  desc: '"Autumn in New York". Canvas. Acrylic. 30X48 In. (76×122 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 242,
  title: 'Don’t like the color of your road? Change it !',
  price: 1800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050146/481998956_976921871211085_3212470584574450127_n.jpg_fc8zcs.jpg',
  desc: '"Don’t like the color of your road? Change it !". Acrylic. 22x14 In. (56×36 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 241,
  title: 'Zebra',
  price: 1100,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050072/481275213_973953271507945_5916748162204753358_n.jpg_q9gib0.jpg',
  desc: '"Zebra". Acrylic. Cardboard. 20X30 In. (51×76 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 240,
  title: 'Mammoth',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765050020/481988075_973223638247575_1405888673680237369_n.jpg_twrop9.jpg',
  desc: '"Mammoth". Acrylic. 22x28 In. (56×71 Cm)',
  sold: true,
  variations: [],
},
{
  id: 239,
  title: 'Coffe lover',
  price: 700,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049935/481658804_967827058787233_6223364705998456436_n.jpg_u8tqso.jpg',
  desc: '"Coffee lover". Black Ink. 17X12 In. (43×30 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 238,
  title: '...',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049863/480849261_967422088827730_1035764905723552686_n.jpg_wzzd6a.jpg',
  desc: '" ... " Ink. 17x12 In. (43×30 Cm)',
  sold: true,
  variations: [],
},
{
  id: 237,
  title: 'Seduction',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049809/480753627_967381348831804_8134988036048762168_n.jpg_kj8u1v.jpg',
  desc: '"Seduction". Acrylic. 20x16 In. (50X40 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 236,
  title: 'Under the Water',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049721/474492689_1154275516038483_8458782853114769557_n.jpg_oc4pqx.jpg',
  desc: '"Under the Water". Acrylic. 22X14 In. (56×36 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 235,
  title: 'Black Ink',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049660/474095464_1153672272765474_3739643540309009884_n.jpg_cups0b.jpg',
  desc: '"Black Ink." Cardboard. 22X14 In. (56×36 Cm)',
  sold: true,
  variations: [],
},
{
  id: 234,
  title: 'Queen of the tribe',
  price: 650,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049606/473147617_1148392939960074_149670558178847596_n.jpg_pqlor8.jpg',
  desc: '"Queen of the tribe". Acrylic. 22X14 In. (56×36 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 233,
  title: 'The way of Life',
  price: 800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049541/473190758_1147872706678764_3036635893117487125_n.jpg_li2dky.jpg',
  desc: '"The Way of Life". Acrylic. 22X14 In. (56×36 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 232,
  title: '...',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049420/473081271_1147870333345668_8210986912755290916_n.jpg_s7vcok.jpg',
  desc: '"..." Acrylic. 22X14 In. (56×36 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 231,
  title: 'Picasso',
  price: 1200,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049340/473549003_1147868256679209_705389782388401291_n.jpg_faf6q7.jpg',
  desc: '"Picasso". Acrylic. 20x16 In. (51×41 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 230,
  title: 'Mushrooms',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049245/473080026_1147865863346115_1834267442072244342_n.jpg_exqkly.jpg',
  desc: '"Mushrooms". Acrylic. 20X16 In. (51×41 Cm). location: USA.',
  sold: false,
  variations: [],
},
{
  id: 229,
  title: 'Saint George',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049186/472569161_1144926456973389_6141060378720478751_n.jpg_ddbwqo.jpg',
  desc: '"Saint George." Ink. 70X50 In. (178×127 Cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 228,
  title: 'Ancient Egypt - Ritual',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765384235/470504528_1139556437510391_6552242865396395868_n.jpg_uxjusb.jpg',
  desc: '"Ancient Egypt - Ritual". Acrylic. Canvas 50X35 In. (127×89 Cm)',
  sold: true,
  variations: [],
},

{
  id: 227,
  title: 'Cycles of Eras',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765384106/481270600_974180321485240_2865821223178268676_n.jpg_wr9mfo.jpg',
  desc: '"Cycles of Eras" Canvas. Acrylic. 20X16 In. (50X40 Cm). location: USA. ',
  sold: false,
  variations: [],
},

{
  id: 226,
  title: 'Woman `s Universe',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765383914/482221122_982132710690001_3288066066864258005_n.jpg_nutbj7.jpg',
  desc: '"Woman `s Universe" canvas. Acrylic. 24X12 In. (61X31 Cm). location: USA. ',
  sold: false,
  variations: [],
},

{
  id: 225,
  title: 'Horse',
  price: 1500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765383835/483107922_982265290676743_58609343716561515_n.jpg_ou5zie.jpg',
  desc: '"Horse" Acrylic. Cardboard. 24X18 In. ( 61X46 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 224,
  title: 'Orchids',
  price: 2000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765383620/484831748_984118423824763_5821871239569853574_n.jpg_s5he9v.jpg',
  desc: '"Orchids". Acrylic. Cardboard. 36X12 In. ( 100X30 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 223,
  title: 'Another City',
  price: 700,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765302751/471819775_1139034020895966_8910943363102977717_n.jpg_xx4cq5.jpg',
  desc: '"Another City". Canvas And Acrylic. 60X50 In (152 × 127 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 222,
  title: '',
  price: 2000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765302605/480719857_967369852166287_6020250565155524097_n.jpg_eaffqu.jpg',
  desc: '"" location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 221,
  title: 'Independent',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765302453/481771407_976794801223792_2613510074330363005_n.jpg_yzorbw.jpg',
  desc: '"Independent". Acrylic. Cardboard. 20X9 In. (51X23 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 220,
  title: '',
  price: 1700,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765302356/482095316_976678551235417_705417283541253873_n.jpg_rmtvfk.jpg',
  desc: 'Acrylic. Cardboard. 20x30 In. (51x76 Cm). location: USA. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 219,
  title: 'El-E-Phant',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765302141/469058399_1122709285861773_1654908535904965146_n.jpg_pr6sge.jpg',
  desc: '"El-E-Phant" Acrylic, Cardboard. 70X50 In (178 × 127 cm).',
  sold: true,
  variations: [],
},

{
  id: 218,
  title: 'Abstaction',
  price: 700,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765301735/470248096_1132102024922499_7957886911123467892_n.jpg_bdqly4.jpg',
  desc: '"Abstraction". Acrylic. 60X50 In (152 × 127 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 217,
  title: 'Stare',
  price: 500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765301637/469105623_1122706395862062_5423493302374921426_n.jpg_b084rd.jpg',
  desc: '"Stare". Ink and Pencil. 42X30 In (107 × 76 cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 216,
  title: 'Autumn',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765301450/468916217_1123257822473586_7342104113277051853_n.jpg_bunroo.jpg',
  desc: '"Autumn". Ink and Pencil. 60X42 In (152 × 107 cm).',
  sold: true,
  variations: [],
},

{
  id: 215,
  title: 'Pigeon City',
  price: 1800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765220180/480869214_967891982114074_5017729117498658739_n.jpg_f0nlhi.jpg',
  desc: '"Pigeon City". Acrylic. 24x48 In. (61x122 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 214,
  title: 'Portal',
  price: 2200,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765220128/481043044_968045915432014_8214737956878932034_n.jpg_x2atbj.jpg',
  desc: '"Portal". Canvas. Acrylic. 30X48 In. (122X76 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 213,
  title: 'Flirting',
  price: 3000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765220069/480568725_968603335376272_6375696100176025890_n.jpg_foor7y.jpg',
  desc: '"Flirting". Canvas. Acrylic. 30X48 In. (122X76 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 212,
  title: 'Abode of Angels',
  price: 7000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765220001/481668993_973940858175853_4787231416629749340_n.jpg_viz8ox.jpg',
  desc: '"Abode of Angels". Acrylic. 22x28 In. (56X71 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 211,
  title: 'Making fun of',
  price: 1100,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765219934/481701743_976236371279635_1179931056039022799_n.jpg_dyzxs8.jpg',
  desc: '"Making fun of". Acrylic. 15x27 In. (38X68 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 210,
  title: 'Don’t like the color of your road? Change it !',
  price: 5500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765219849/481998956_976921871211085_3212470584574450127_n.jpg_arm5sw.jpg',
  desc: '"Don’t like the color of your road? Change it !". Acrylic. 22x14 In. (56X36 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 209,
  title: 'Lady With Dog',
  price: 800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765219775/481999683_976931461210126_8933072758663484056_n.jpg_vicvhf.jpg',
  desc: '"Lady With a Dog". Acrylic. 20X16 In. (50x40 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 208,
  title: 'Defenseless',
  price: 1300,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765219718/482236648_982117094024896_1125180320769087273_n.jpg_ixdkpa.jpg',
  desc: '"Defenseless". Acrylic. 40X30 In. (101x77 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 207,
  title: 'You can get up',
  price: 500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765219617/493309421_1013906510845954_8687785847521545639_n.jpg_okuidb.jpg',
  desc: '"You can get up". Acrylic. 11.5X8 In. (29X19.5 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 206,
  title: 'Meeting',
  price: 400,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765219564/495031034_1025854646317807_2356977663555189026_n.jpg_oaffs7.jpg',
  desc: '"Meeting". Acrylic. 8x8 In. (20X20 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 205,
  title: 'Artist',
  price: 1500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765219464/514593147_1061653006071304_3467073438219701394_n.jpg_nsfbux_tyr7zz.jpg',
  desc: '"Artist". Acrylic. 10X15 In. (26X38 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 204,
  title: 'Blonde',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765219392/505386078_1045823330987605_4585256806269559549_n.jpg_fipaad.jpg',
  desc: '"Blonde". Acrylic. 11.5X16 In. (29X40 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 203,
  title: 'You Can',
  price: 1200,
  img: 'imgs/1.jpg',
  desc: '"You Can". Acrylic. 22X28 In (56X71 Cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 202,
  title: '',
  price: 3500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765218995/484622599_982254300677842_1764572056688229198_n.jpg_pryptu.jpg',
  desc: '"ClownFish". Acrylic. 36X24 In. (100X61 Cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 201,
  title: 'Hello From Future',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765218843/471819847_1139036760895692_6824023209373690025_n.jpg_j3zhjd.jpg',
  desc: '"Hello From Future". Acrylic. 50X40 In. (127×102 Cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 200,
  title: 'Infinite',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765218534/c3e691_fa56f1e836a647788d113a75c1d5ba6b_mv2_s8gt4y.jpg',
  desc: '"Infinite". Acrylic. 90X60 In. (229×152 Cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 199,
  title: 'Unprotected',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765218483/c3e691_8f52aa629fd64e74902502e098edc463_mv2_efzzrb.jpg',
  desc: '"Unprotected". 60X42 In (152×107 Cm). location: USA. ',
  sold: false,
  variations: [],
},

{
  id: 198,
  title: 'Friends',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765218433/c3e691_185ae033f74c4958948cd597f0b2d1ae_mv2_ugfkuj.jpg',
  desc: '"Friends". Ink. 50X45 In. (127×114 Cm)',
  sold: true,
  variations: [],
},

{
  id: 197,
  title: 'Bring the Colors',
  price: 1400,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765218310/c3e691_73d2e75063fa40aa924ae9a769e0b6a8_mv2_vutmma.jpg',
  desc: '"Bring the Colors". Acrylic. 60X50 In. (152×127 Cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 196,
  title: 'Zinger',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765218196/c3e691_a707437a1ef14472942ffbd51e096a22_mv2_avwfs0.jpg',
  desc: '"Zinger". Acrylic. 87X51 In. (221×130 Cm)',
  sold: true,
  variations: [],
},

{
  id: 195,
  title: 'The abode of angels',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765218067/c3e691_1ce792a64e4f4fc6a4c50692a24901cb_mv2_tn7wuc.jpg',
  desc: '"The abode of Angels". Acrylic. 40X30 In. (102×76 Cm)',
  sold: true,
  variations: [],
},

{
  id: 194,
  title: 'Got Confused',
  price: 7500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217987/c3e691_7814b18f978245cd88332788451aa304_mv2_rf5mve.jpg',
  desc: '"Got Confused". Acrylic. 100X60 In. (254×152 Cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 193,
  title: 'King',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217940/c3e691_8f424ca8e7c243c7806494367530190a_mv2_ra8dip.jpg',
  desc: '"King". Ink. 30X21 In. (76×53 Cm)',
  sold: true,
  variations: [],
},

{
  id: 192,
  title: 'Family from Africa',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217920/c3e691_8bfea8a1af814f7da96e9895c993571d_mv2_s47pbe.jpg',
  desc: '"Family from Africa". Acrylic. 90X60 In (229 × 152 cm). ',
  sold: true,
  variations: [],
},

{
  id: 191,
  title: 'White Bear',
  price: 1100,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217804/c3e691_f2b69097847140e9bc89a17613ca5cdc_mv2_uvvewu.jpg',
  desc: '"White Bear". Ink. A4. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 190,
  title: 'Colorful Space',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217716/c3e691_341b9707772a4bffbd1f74427503fc18_mv2_likw2e.jpg',
  desc: '"Colorful Space". Acrylic. 60X50 In (152 × 127 cm).',
  sold: true,
  variations: [],
},

{
  id: 189,
  title: 'You can`t lock the Love',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217622/c3e691_e2001c233839457cb0eda89cd1699047_mv2_s2crd1.jpg',
  desc: '"You can`t lock the Love". Acrylic. 70X50 In (178 × 127 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 188,
  title: 'Tsikara',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217547/c3e691_f8c004e097e94dfe95ba3755e9075167_mv2_eimlx9.jpg',
  desc: '"Tsikara". Acrylic. 100X54 In (254 × 137 cm).',
  sold: true,
  variations: [],
},

{
  id: 187,
  title: 'Father-Son',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217513/c3e691_e81acec9905e4642968add13dbd5343a_mv2_o2dyzj.jpg',
  desc: '"Father-Son". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 186,
  title: 'I choose you.',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217349/c3e691_1a85172fa6444055a358b443ded82396_mv2_v494vm.jpg',
  desc: '"I choose you". Acrylic. 100X40 In (254 × 102 cm).',
  sold: true,
  variations: [],
},

{
  id: 185,
  title: 'With Bellies',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217248/c3e691_01207027e584491da7e6c6012415b65a_mv2_cykgqw.jpg',
  desc: '"With Bellies"',
  sold: true,
  variations: [],
},

{
  id: 184,
  title: 'White Owl',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765217136/c3e691_71cf9d1ab3aa4126b7e0b2f3be17e731_mv2_kwks8c.jpg',
  desc: '"White Owl". Acrylic. 56X32 In (142 × 81 cm).',
  sold: true,
  variations: [],
},

{
  id: 183,
  title: 'Motherhood',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765216838/c3e691_a84e65626224429c987edd73b8f56710_mv2_d_1536_2048_s_2_awsi6m.jpg',
  desc: '"Motherhood". Acrylic and Oil. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 182,
  title: 'Panther',
  price: 800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765216807/c3e691_c10a7ccf6f3b4b8bb913be583827452a_mv2_j4pd1z.jpg',
  desc: '"Panther". Acrylic. 87X35 In (221 × 89 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 181,
  title: 'Fishes on the Canva',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765216736/c3e691_86a9f936f8ec4ddcbe3b4f11aaad6265_mv2_rctlpv.jpg',
  desc: '"Fishes on the Canva". Acrylic. 60X40 In (152 × 102 cm).',
  sold: true,
  variations: [],
},

{
  id: 180,
  title: 'Outside the City',
  price: 800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765216538/c3e691_d51831969acd42c8a972c3743338b612_mv2_zc56w8.jpg',
  desc: '"Outside the City". Canvas. 50X40 In (127 × 102 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 179,
  title: 'Ocean Turtle',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765216451/c3e691_a342d6b1e3bc4d9d8afb5a689a061737_mv2_d_1536_2048_s_2_ndakjn.jpg',
  desc: '"Ocean Turtle". Canvas and Oil.',
  sold: true,
  variations: [],
},

{
  id: 178,
  title: 'Family',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765216337/c3e691_600541ed91e44cfe93ffec5455503518_mv2_tnzflt.jpg',
  desc: '"Family". Canvas. 85X65 In (216 × 165 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 177,
  title: 'Calmar',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765215991/c3e691_0d5f0d10ac9c4c15b5b28e61084f97ec_mv2_ivrui5.jpg',
  desc: '"Calmar". Ink. A3.',
  sold: true,
  variations: [],
},

{
  id: 176,
  title: 'Meditation',
  price: 800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765215832/c3e691_2ab4bdd2e0b440a284bd80efc4a10ed9_mv2_d_1972_2763_s_2_mbnk4o.jpg',
  desc: '"Meditation". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 175,
  title: 'Husband-Wife',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765215736/c3e691_811598562067429696c6029223d4a8e6_mv2_d_3510_2482_s_4_2_qfzoye.jpg',
  desc: '"Husband-Wife". A4.',
  sold: true,
  variations: [],
},

{
  id: 174,
  title: 'Ladybug',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765215654/c3e691_4a478771f5ea4b7c8c8b322d3c17f3ea_mv2_d_3024_4032_s_4_2_rrsurv.jpg',
  desc: '"Ladybug". Canvas and Oil. 100X80 In (254 × 203 cm).',
  sold: true,
  variations: [],
},

{
  id: 173,
  title: 'White Bear',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765215512/c3e691_0de424dbc3024008a09d1bf5538a6f02_mv2_d_2368_3177_s_2_bdqd4s.jpg',
  desc: '"White Bear". Oil. 80X60 In (203 × 152 cm).',
  sold: true,
  variations: [],
},

{
  id: 172,
  title: 'Drackon',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765215353/c3e691_02dfad3c9f6d4b00ace655e7c90d1b3d_mv2_d_2603_3504_s_4_2_qqam2p.jpg',
  desc: '"Drackon". Ink. A3.',
  sold: true,
  variations: [],
},

{
  id: 171,
  title: 'Sky `s town',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765215285/c3e691_43fc6e75798e46c1b937e626a44da9fe_mv2_d_1966_1598_s_2_hfnxzf.jpg',
  desc: '"Sky `s town". Canvas and Oil. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 170,
  title: 'Horn-circulation',
  price: 750,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765215152/c3e691_1d6ea8339a2c41ddb83af179b9ef24ca_mv2_d_2770_4009_s_4_2_i0amqc.jpg',
  desc: '"Horn-circulation". Ink. 22X33 In (56 × 84 cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 169,
  title: 'Elephant',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765214887/c3e691_03ed856af2344477b1e8eb6630565d53_mv2_etcngk.jpg',
  desc: '"Elephant". Oil and Canvas. 70X50 In (178 × 127 cm).',
  sold: true,
  variations: [],
},

{
  id: 168,
  title: 'Vaja',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765214832/c3e691_1f6381724ae5463d95eddc9aac0f256d_mv2_d_4685_6836_s_4_2_ekppfd.jpg',
  desc: '"Vaja". White Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 167,
  title: 'Georgian Sounds',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765214775/c3e691_50f11ff1ebb4459794602a5807cbc43a_mv2_d_3228_1940_s_2_ydmkas.jpg',
  desc: '"Georgian Sounds". Canvas. 67X35 In (170 × 89 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 167,
  title: 'Gifted World',
  price: 700,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765214726/c3e691_ad21a586df414b1b8a3016c4afeaa66b_mv2_d_2543_3835_s_4_2_upd2li.jpg',
  desc: '"Gifted World". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 166,
  title: 'Ka-Ka-Du',
  price: 750,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765214650/c3e691_51eb1de10292416f95cc286026ded820_mv2_d_2811_3734_s_4_2_onavog.jpg',
  desc: '"Ka-Ka-Du". Canvas. 43X40 In (109 × 102 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 165,
  title: 'Different',
  price: 1800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765214586/c3e691_565c6e80977a472fa037b0e7bfb19107_mv2_d_3090_2314_s_2_v2g7on.jpg',
  desc: '"Different". Oil. 100X80 In (254 × 203 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 164,
  title: 'Dream Train',
  price: 800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765214509/c3e691_da71be8657e34bdbb0cb642b7f078de3_mv2_d_4614_3138_s_4_2_b27hpy.jpg',
  desc: '"Dream Train". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 163,
  title: 'White Horse',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765214436/c3e691_6c73d8169212492192e6707707f9a10b_mv2_d_1947_3041_s_2_xbve1v.jpg',
  desc: '"White Horse". Canvas and Oil. 75X43 In (191 × 109 cm).',
  sold: true,
  variations: [],
},

{
  id: 162,
  title: 'Train',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765213877/c3e691_625b7adf56ec4955bd8b0dd646dbcc1f_mv2_hcb50b.jpg',
  desc: '"Train". Oils. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 161,
  title: 'Megapolis',
  price: 1100,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765213813/c3e691_d31154f7763c433eb8597dbfe8082d8c_mv2_d_2448_3264_s_4_2_tpc4gr.jpg',
  desc: '"Megapolis". Oils and Canvas. 83X43 In (211 × 109 cm). location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 160,
  title: 'Flag',
  price: 950,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765213784/c3e691_02cab05ebf094c87b09cafeccb31dc6f_mv2_d_3264_2448_s_4_2_qnppjz.jpg',
  desc: '"Flag". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 159,
  title: 'Calluses',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765213718/c3e691_19b6e4ae8eb9431f82aab6cd206a9466_mv2_d_4653_6844_s_4_2_r9cjrv.jpg',
  desc: '"Calluses". White and Black Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 158,
  title: 'Lion',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765213623/c3e691_fa83ab4a971a46049deb5c62f87063d9_mv2_d_4604_6482_s_4_2_deqery.jpg',
  desc: '"Lion". White Ink. A3. ',
  sold: true,
  variations: [],
},

{
  id: 157,
  title: 'Love',
  price: 950,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765213571/c3e691_216fa992b6644724a8fe437da5053a12_mv2_d_6734_9460_s_4_2_cm8xtu.jpg',
  desc: '"Love". White Ink. A3. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 156,
  title: 'Taqsa',
  price: 700,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765213471/c3e691_4bdf191cf7444b5a99e0f7c413e4c03d_mv2_d_6565_6009_s_4_2_ayhcub.jpg',
  desc: '"Taqsa". Ink. 30X30 In (76 × 76 cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 155,
  title: 'Twins',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765213236/c3e691_b6f0affdd1214e44a68ecb40578f4873_mv2_am21gl.jpg',
  desc: '"Twins". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 154,
  title: 'Fairy',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212979/c3e691_9a5a96138ce0456fb555b8fb0ec9a01a_mv2_d_4835_6901_s_4_2_ctw6nf.jpg',
  desc: '"Fairy". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 153,
  title: 'Mari',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212925/c3e691_ce53e5ee4dd74e6b998a2957462b58ae_mv2_d_1913_2842_s_2_xnvfsr.jpg',
  desc: '"Mari". Oil. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 152,
  title: 'Different Worlds',
  price: 850,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212870/c3e691_f0b4d8eec29c47488434e2e8a2d2e176_mv2_d_5874_16528_s_3_ggpyjy.jpg',
  desc: '"Different Worlds". Ink. A4. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 151,
  title: 'Autumn’s Flower',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212811/c3e691_c2f9596f025c4a84b746c7bb26e92a5f_mv2_obffl9.jpg',
  desc: '"Autumn `s Flower". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 150,
  title: 'He loves me — he loves me not',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212781/c3e691_00221e32161d41a29fc99aad2aff3886_mv2_d_2626_3741_s_4_2_mhdwqg.jpg',
  desc: '"He loves me — he loves me not". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 149,
  title: 'Galaxy',
  price: 1200,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212646/c3e691_bd9510299d694c25b9b7b33635446e17_mv2_d_3405_4822_s_4_2_u37ydc.jpg',
  desc: '"Galaxy". Ink. A3. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 148,
  title: 'Hot City',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212540/c3e691_da96f6eea549420c85f2536fb9bbf7c3_mv2_qfqydj.jpg',
  desc: '"Hot City". Oil and Canvas.',
  sold: true,
  variations: [],
},

{
  id: 147,
  title: 'Woman and Man',
  price: 1000,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212476/c3e691_eac66f7ff87d4986bf32587374ea58f8_mv2_d_3455_4848_s_4_2_chgxmt.jpg',
  desc: '"Woman and Man". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 146,
  title: 'Information',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212425/c3e691_f97bc29d691d41238f5a90d9f4f6104f_mv2_d_4725_6788_s_4_2_fajrh4.jpg',
  desc: '"Information". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 145,
  title: 'Some and Different',
  price: 800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212377/c3e691_7e081a2070b04eb69fb7539db53ceaec_mv2_d_4604_3173_s_4_2_fflffj.jpg',
  desc: '"Some and Different". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 144,
  title: 'Traveler',
  price: 750,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212325/c3e691_b3540258a51140518c35c57319550648_mv2_vzaoma.jpg',
  desc: '"Traveler". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 143,
  title: 'Skull',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212266/c3e691_e9fd508529ba4b6f973dd3a612bbc95e_mv2_d_5791_4600_s_4_2_wvxcum.jpg',
  desc: '"Skull". White Ink. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 142,
  title: 'Che',
  price: 750,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212226/c3e691_60ed5a1fbe574a83b5aed249f61ca239_mv2_d_2446_3444_s_4_2_ej6oeg.jpg',
  desc: '"Che". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 141,
  title: 'Cube',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212178/c3e691_29d7822f94e04632b4e0f34989d0d11d_mv2_d_2036_2884_s_2_giesff.jpg',
  desc: '"Cube". White and Silver Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 140,
  title: 'Beard-Mustache',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212068/c3e691_92a9a57786f24947977dc7df0c810955_mv2_d_2482_3510_s_4_2_tbsvmg.jpg',
  desc: '"Beard-Mustache". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 139,
  title: 'Fluffy',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765212019/c3e691_d9997bf589954b48bf144706b0afdac3_owokwo.jpg',
  desc: '"Fluffy". Ink.',
  sold: true,
  variations: [],
},

{
  id: 138,
  title: 'Hearty',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211995/c3e691_9b4e0dbb399a41b397fe1319d389890f_mv2_d_2592_3778_s_4_2_auoepi.jpg',
  desc: '"Hearty". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 137,
  title: 'Walk',
  price: 600,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211886/c3e691_421b9eb8d042459d88f886d35c10b399_s746br.jpg',
  desc: '"Walk". Ink. A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 136,
  title: 'Mother of Nature',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211836/c3e691_e91dd334f7dd44fbaf4e9b6052bf5e60_kqdcxi.jpg',
  desc: '"Mother of Nature". Ink. A4. ',
  sold: true,
  variations: [],
},

{
  id: 135,
  title: 'Wild Nature',
  price: 600,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211772/c3e691_5e26c3c2c037400fbc3c9b00b280e08b_kmiwbk.jpg',
  desc: '"Wild Nature". Ink and Watercolor. A4. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 134,
  title: 'Owl',
  price: 270,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211734/c3e691_34912e7b4f024a7588b0fdc7bea82440_mv2_ngkl0p.jpg',
  desc: '"Owl". Ink. A2. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 133,
  title: 'Puppy',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211686/c3e691_09428d56e7a542638a809e601353602a_ktmxbk.jpg',
  desc: '"Puppy". Ink.',
  sold: true,
  variations: [],
},

{
  id: 132,
  title: 'Planets',
  price: 750,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211619/c3e691_079bfcdc90f746fdb5333c14b0a52851_oy21am.jpg',
  desc: '"Planets". Ink and Coffe. A4. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 131,
  title: 'Time Machine',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211573/c3e691_a9abcdb063634e8995b20dbe7f67e57f_mv2_d_3742_2567_s_4_2_irmgcs.jpg',
  desc: '"Time Machine". Ink. A4. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 130,
  title: 'Dreams',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211530/c3e691_daba6843275e4379a8835721b7d7b20b_mfe8m2.jpg',
  desc: '"Dreams". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 129,
  title: 'The king',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211464/c3e691_c92e72a993ab491a96fc0dcc9440cdb9_mv2_d_4775_6836_s_4_2_vt9teh.jpg',
  desc: '"The king". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 128,
  title: 'Pelikoni',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211410/c3e691_5a85fc51d54a46e68dfc94f4d94b9538_sfzody.jpg',
  desc: '"Pelikoni". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 127,
  title: 'Grandpa',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211370/c3e691_ebe9cf46832e47079542cccaf774b91e_fhfnnz.jpg',
  desc: '"Grandpa". Ink. A4. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 126,
  title: 'Summer',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211321/c3e691_d9425019fe244dcd95d9bbfdbdb361b4_mv2_d_3400_4803_s_4_2_xwlf1m.jpg',
  desc: '"Summer". White Ink. A3. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 125,
  title: 'King',
  price: 270,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211265/c3e691_c5fe4c5f2045487caa02d7105308fb4e_mv2_d_2112_2955_s_2_rrtdws.jpg',
  desc: '"King". Ink. A3.',
  sold: true,
  variations: [],
},

{
  id: 124,
  title: 'King',
  price: 270,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211217/c3e691_5b41c10970bd47179efd28410eabe68d_mv2_d_4673_6830_s_4_2_dg5hia.jpg',
  desc: '"King". Ink. A4. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 123,
  title: 'Golden Fleece',
  price: 270,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211167/c3e691_c66abdb7e51e4c239ce9ac4a81345b50_mv2_d_7655_5241_s_4_2_przwif.jpg',
  desc: '"Golden Fleece". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 122,
  title: 'Teeth',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765211102/c3e691_7200957936e240b1b5dfc29f5b859ff9_mv2_d_2482_3510_s_4_2_oyfc1b.jpg',
  desc: '"Teeth". Ink.',
  sold: true,
  variations: [],
},

{
  id: 121,
  title: 'Different dimensions',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765210969/c3e691_e746889960df45d98565acf456efcd90_mv2_d_1924_2976_s_2_lsp68o.jpg',
  desc: '"Different dimensions". Ink. A3.',
  sold: true,
  variations: [],
},

{
  id: 120,
  title: 'Looking at you',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765210909/c3e691_23d31dd368844809a8b4656f57925b7a_dxze2f.jpg',
  desc: '"Looking at you".',
  sold: true,
  variations: [],
},

{
  id: 119,
  title: '...',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765210869/c3e691_d0e153d9bebf42e782162e1fa67e91b3_mv2_d_1433_2978_s_2_b4mbcq.jpg',
  desc: '" ..." Pencil and Ink.',
  sold: true,
  variations: [],
},

{
  id: 118,
  title: 'Georgian Dance',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765210789/c3e691_67c8766b6ab74456ac66c8874342ebca_d37f3g.jpg',
  desc: '"Georgian Dance". Pencil. A4.',
  sold: true,
  variations: [],
},

{
  id: 117,
  title: 'Goddess',
  price: 900,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765210758/c3e691_2a1bf6eb9e1445f493fc71dccc2b272b_mv2_d_3061_1960_s_2_wmlhyb.jpg',
  desc: '"Goddess". Silver and White Ink. A3. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 116,
  title: 'Donki',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765210667/c3e691_dc02d1689342493896d32b0b2a5794c3_g61fln.jpg',
  desc: '"Donki". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 115,
  title: 'Blood',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765210598/c3e691_66a9ac1f6a3a43ba9ad709808e41fda2_tc7rga.jpg',
  desc: '"Blood". Pencil. A4.',
  sold: true,
  variations: [],
},

{
  id: 114,
  title: 'Calendar',
  price: 800,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765210127/c3e691_e1ceab86e1e14d65aae0d3455012d62f_raevzr.jpg',
  desc: '"Calendar". Ink. A4. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 113,
  title: 'The King Tamar',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049140/471497539_1139552050844163_1476800818418822051_n.jpg_xshg40.jpg',
  desc: '"The King Tamar". Ink. 50X35 In (127 × 89 cm).',
  sold: true,
  variations: [],
},

{
  id: 112,
  title: 'The Autumn',
  price: 1300,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765049044/470227722_1132082254924476_7138227883281223088_n.jpg_rrtoaa.jpg',
  desc: 'The Autumn. Ink. 60X42 In (152 × 107 cm). location: USA.',
  sold: false,
  variations: [],
},

{
  id: 111,
  title: 'The Golden Owl',
  price: 3500,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048951/469126310_1123262155806486_9202785119650263821_n.jpg_g8jdd4.jpg',
  desc: '"The Golden Owl" .Golden Acrylic. 70X50 In (178 × 127 cm). location: USA. ',
  sold: false,
  variations: [],
},

{
  id: 110,
  title: 'The dancer',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048739/469146770_1123253269140708_7416312910516123945_n.jpg_pxiiye.jpg',
  desc: '"The dancer". Ink. 60x42 In (152 × 107 cm).',
  sold: true,
  variations: [],
},

{
  id: 109,
  title: 'Drunk with love',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048379/469337003_1122713349194700_6359968690384233418_n.jpg_dbycst.jpg',
  desc: '"Drunk with love". Ink. 60x40 In (152 × 102 cm).',
  sold: true,
  variations: [],
},

{
  id: 108,
  title: 'The lord is one',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765048088/469115238_1122702562529112_6737868821185134812_n.jpg_kez2wo.jpg',
  desc: '"The Lord is one". Ink. 70X50 In (178 × 127 cm).',
  sold: true,
  variations: [],
},

{
  id: 107,
  title: 'Surprise',
  price: 1200,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765047978/469065392_1122694332529935_7413470774904506736_n.jpg_dlo1yc.jpg',
  desc: '"Surprise". Ink. 42X30 In (107 × 76 cm). location: USA. ',
  sold: false,
  variations: [],
},

{
  id: 106,
  title: '',
  price: 600,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765047934/469051355_1122690572530311_7380671146387344506_n.jpg_z14brx.jpg',
  desc: 'The shimmer of modern city lights. location: Georgia.',
  sold: false,
  variations: [],
},

{
  id: 105,
  title: 'Cheetah',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765047825/469380787_1122686409197394_7832349485785654720_n.jpg_gevclg.jpg',
  desc: '"Cheetah". Ink. 30X21 In (76 × 53 cm).',
  sold: true,
  variations: [],
},

{
  id: 104,
  title: 'Family on the Beach',
  price: 850,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765047719/469122421_1122682675864434_4076381040150500447_n.jpg_hovkx4.jpg',
  desc: '"Family on the Beach". Ink. 30x21 In (76 × 53 cm). location: USA. ',
  sold: false,
  variations: [],
},

{
  id: 103,
  title: 'SeaHorse',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765036041/467896287_1115185069947528_6550787616294378087_n.jpg_v1lndl.jpg',
  desc: '"SeaHorse". Ink. A4.',
  sold: true,
  variations: [],
},

{
  id: 102,
  title: 'Gravity',
  price: 1200,
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035816/468073922_1114644173334951_7417169700168004738_n.jpg_nqaqig.jpg',
  desc: '"Gravity". Ink. Size A4. location: USA.',
  sold: false,
  variations: [],
},

{
  id: 101,
  title: 'The Sherekilebi',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035747/151324049_280411056758271_1673562133655503910_n.jpg_peqgic.jpg',
  desc: '"The Sherekilebi". Ink. 30X21 In (76 × 53 cm).',
  sold: true,
  variations: [],
},

{
  id: 100,
  title: 'Father and Son',
  img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035624/125192354_220773896055321_1749585992565096285_n.jpg_vjn0f7.jpg',
  desc: '"Father and Son". Ink. A4.',
  sold: true,
  variations: [],
},

{
    id: 99,
    title: 'Sneaked out to paint a picture',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035492/123639524_218675892931788_7716703223970509396_n.jpg_thq4zc.jpg',
    desc: '"Sneaked out to paint a picture". Mascara and pencil. 49X40 In (124 × 102 cm).',
    sold: true,
    variations: [],
},
{
    id: 98,
    title: 'Dynamics',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035407/123588509_217878889678155_5756797449401061845_n.jpg_f7fjwm.jpg',
    desc: '"Dynamics". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 97,
    title: 'Mother and Child',
    price: 700,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035294/120803198_210229570443087_3743276575646864438_n.jpg_xxrriu.jpg',
    desc: '"Mother and Child". Ink. 30X21 In (76 × 53 cm). location: USA.',
    sold: false,
    variations: [],
},
{
    id: 96,
    title: 'Free',
    price: 2200,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035230/119164018_205297380936306_6982562132064596130_n.jpg_sti4nl.jpg',
    desc: '"Free". Ink. 70X35 In (178 × 89 cm). location: USA.',
    sold: false,
    variations: [],
},
{
    id: 95,
    title: 'Free',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035134/116678580_195532985246079_1171730058058132167_n.jpg_trhvou.jpg',
    desc: '"Free". Ink. 60X39 In (152 × 99 cm). ',
    sold: true,
    variations: [],
},
{
    id: 94,
    title: 'Tri-angle',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765035053/109538779_191393448993366_3596722291328497432_n.jpg_cassll.jpg',
    desc: '“Tri-angle”. Cardboard. 102X72 In (259 × 183 cm).',
    sold: true,
    variations: [],
},
{
    id: 93,
    title: 'White Owl',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034931/89664976_155844622548249_6656279043337355264_n.jpg_v4eeo6.jpg',
    desc: '“White Owl”. Cardboard. 56X32 In (142 × 81 cm).',
    sold: true,
    variations: [],
},
{
    id: 92,
    title: 'The Black and White Side of the Mask',
    price: 1500,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034843/87448870_148292546636790_5478191139204890624_n.jpg_fqcb2l.jpg',
    desc: '"The Black and White Side of the Mask". Ink. 70X30 In (178 × 76 cm). location: USA.',
    sold: false,
    variations: [],
},
{
    id: 91,
    title: 'With the Bells',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034683/86186953_145223776943667_9124431525251645440_n.jpg_gmaqba.jpg',
    desc: '"With the Bells". Ink. 50X25 In (127 × 64 cm).',
    sold: true,
    variations: [],
},
{
    id: 90,
    title: 'Red',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034577/83432719_141876830611695_1686719874312699904_n.jpg_kony9b.jpg',
    desc: '“Red”. Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 89,
    title: 'My November',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034479/83982439_138699994262712_6747923981757579264_n.jpg_hfavj8.jpg',
    desc: '"My November". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 88,
    title: 'Guardian Angel',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034367/81407560_134320711367307_7289376554415554560_n.jpg_krrg8y.jpg',
    desc: '"Guardian Angel". Mascara. 41X30 In (104 × 76 cm). location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 87,
    title: 'Polar Mother Bear',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034284/81154719_132544661544912_6962340513089323008_n.jpg_ze1v8r.jpg',
    desc: '“Polar Mother Bear”. ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 86,
    title: 'Pen-guin',
    price: 1000,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034187/80466047_131002488365796_3801957208502042624_n.jpg_mhoomy.jpg',
    desc: '“Pen-guin”. Ink. A4. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 85,
    title: 'The Owl Family',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765034082/79686368_127157525416959_8487581196304252928_n.jpg_q3bljz.jpg',
    desc: '"The Owl Family". Mascara. A4.',
    sold: true,
    variations: [],
},
{
    id: 84,
    title: 'Black Cat',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033942/80025506_126634488802596_5116205849479479296_n.jpg_yksts1.jpg',
    desc: '“Black Cat”. Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 83,
    title: 'Sinks',
    price: 850,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033663/78893236_121121632687215_6500364463407890432_n.jpg_dmely9.jpg',
    desc: '"Sinks". location: USA.',
    sold: false,
    variations: [],
},
{
    id: 82,
    title: 'Another World',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033456/79540032_121121616020550_2851183347613302784_n.jpg_zykfxq.jpg',
    desc: '"Another World". location: Georgia. ',
    sold: false,
    variations: [],
},
{
    id: 81,
    title: 'Lost in Space',
    price: 1300,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033410/78902873_120028259463219_8004750477650558976_n.jpg_hz5bh3.jpg',
    desc: '"Lost in Space". Ink. A3. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 80,
    title: 'Lemon Tree',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033307/78914757_120027679463277_4183539368847212544_n.jpg_foklah.jpg',
    desc: '"Lemon Tree". Ink. 26X14 In (66 × 36 Cm). ',
    sold: true,
    variations: [],
},
{
    id: 79,
    title: 'Kind Wizard',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033255/78341514_120027626129949_5133842793378086912_n.jpg_weupm9.jpg',
    desc: '"Kind Wizard". Golden Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 78,
    title: 'Golden Fish',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033189/80110216_120027559463289_4201050457319145472_n.jpg_bj85o1.jpg',
    desc: '"Golden Fish". Golden Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 77,
    title: 'Contact',
    price: 900,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033120/78200900_120027476129964_4988109596632547328_n.jpg_fywj2w.jpg',
    desc: '"Contact". Ink. A4. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 76,
    title: 'Golden Heart',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765033078/78100615_120027369463308_6736425920514490368_n.jpg_g1ddwo.jpg',
    desc: '"Golden Heart". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 75,
    title: 'Egg and Chicken',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032996/79077562_120023162797062_6214030766288928768_n.jpg_gy3hig.jpg',
    desc: '"Egg and Chicken". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 74,
    title: 'Galaxy',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032952/71029022_120022872797091_7875918441071247360_n.jpg_k0dfse.jpg',
    desc: '"Galaxy". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 73,
    title: 'Profile',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032890/78722197_120022189463826_7290149824622493696_n.jpg_qyvz59.jpg',
    desc: '"Profile". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 72,
    title: 'Hemlet',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032855/78576290_120022069463838_1954436000600031232_n.jpg_pctoid.jpg',
    desc: '"Hemlet". Ink. A4. ',
    sold: true,
    variations: [],
},
{
    id: 71,
    title: 'Guardian angel',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032812/78554966_119979579468087_6902303995641987072_n.jpg_sqtdea.jpg',
    desc: '"Guardian angel". Ink.',
    sold: true,
    variations: [],
},
{
    id: 70,
    title: 'Let s keep it.',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032776/74662484_117282519737793_3913007917267156992_n.jpg_l62nge.jpg',
    desc: '"Let s keep it". Ink. A3.',
    sold: true,
    variations: [],
},
{
    id: 69,
    title: ' Fishes',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032590/78376769_116642276468484_7794945310970609664_n.jpg_hwypyj.jpg',
    desc: '"Fishes". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 68,
    title: 'Fish Bone',
    price: 700,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032536/76960697_116641636468548_5686552591282995200_n.jpg_ij9iti.jpg',
    desc: '"Fish ` Bone". Ink. A4. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 67,
    title: 'Elephant',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032499/78542561_116641143135264_7683842031805792256_n.jpg_vwul8n.jpg',
    desc: '"Elephant". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 66,
    title: 'Elephant',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032433/78289057_116640036468708_8240923500827639808_n.jpg_h3y41m.jpg',
    desc: '"Elephant". Ink. A3. ',
    sold: true,
    variations: [],
},
{
    id: 65,
    title: 'Elephant',
    price: 700,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032355/78111439_116639123135466_6853081230888402944_n.jpg_xycslz.jpg',
    desc: '"Elephant". Ink. A4. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 64,
    title: 'Elephant',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765032311/78586861_116639069802138_6224580335544303616_n.jpg_azdee3.jpg',
    desc: '"Elephant". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 63,
    title: 'Nature',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031843/74463719_111292623670116_6057085681971232768_n.jpg_uytcyk.jpg',
    desc: '"Nature". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 62,
    title: 'Duck',
    price: 900,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031817/75650572_111291060336939_3572573506417721344_n.jpg_g2uora.jpg',
    desc: '"Duck". Ink. A4. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 61,
    title: 'Fish',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031769/76751611_111290007003711_2364215948388335616_n.jpg_wnpdab.jpg',
    desc: '"Fish". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 60,
    title: 'Cherry',
    price: 2000,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031735/75341052_111290017003710_7033570204936306688_n.jpg_xam6mh.jpg',
    desc: '"Cherry". Ink. A3. location: USA. ',
    sold: false,
    variations: [],
},
{
    id: 59,
    title: 'FingerPrint',
    price: 950,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031688/77163035_111289480337097_8124329226233970688_n.jpg_u3nvqi.jpg',
    desc: '"FingerPrint". Ink. A3. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 58,
    title: 'Easter Egg',
    price: 950,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031641/74157348_111289347003777_328428572802809856_n.jpg_e5krox.jpg',
    desc: '"Easter Egg". Ink. A3. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 57,
    title: 'Escape',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031608/73388392_111289227003789_4863222049427947520_n.jpg_m8geu9.jpg',
    desc: '"Escape". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 56,
    title: 'Veloman',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031576/75029194_111289113670467_2770829388587991040_n.jpg_yql2b4.jpg',
    desc: '"Veloman". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 55,
    title: 'Routs',
    price: 1000,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031536/75196443_111288367003875_2737516604332965888_n.jpg_mfa7to.jpg',
    desc: '"Routs". Ink. A4.location: USA.',
    sold: false,
    variations: [],
},
{
    id: 54,
    title: 'Roads',
    price: 950,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031444/77259008_111288253670553_5512403027618693120_n.jpg_dx8nvn.jpg',
    desc: '"Roads". Ink. A4. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 53,
    title: 'Last Apple',
    price: 1050,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031413/74227306_111286200337425_2515316114792120320_n.jpg_nbbqaj.jpg',
    desc: '"Last Apple". Ink. A4. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 52,
    title: 'The Old Man Arlequino',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031325/74232789_111285357004176_409244206452703232_n.jpg_rff5ri.jpg',
    desc: '"The Old Man Arlequino". A4.',
    sold: true,
    variations: [],
},
{
    id: 51,
    title: 'Look in my Eyes',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031289/76611028_111283250337720_3573771913962455040_n.jpg_ezipce.jpg',
    desc: '"Look in my Eyes." A4.',
    sold: true,
    variations: [],
},
{
    id: 50,
    title: 'My Heart',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031258/78615090_111283130337732_617221752879054848_n.jpg_pxhkeq.jpg',
    desc: '"My Heart". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 49,
    title: 'World of leaf',
    price: 700,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031225/77391108_111282223671156_1871130419789824000_n.jpg_cpbjmi.jpg',
    desc: '"World of leaf". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 48,
    title: 'Woman Gaming World',
    price: 270,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031197/69887779_111282147004497_6966340420427055104_n.jpg_rrnsdc.jpg',
    desc: '"Woman Gaming World".',
    sold: true,
    variations: [],
},
{
    id: 47,
    title: 'Woman`s Hair',
    price: 500,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031166/78480537_111281997004512_70202945555136512_n.jpg_xd2ih9.jpg',
    desc: '"Woman `s Hair". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 46,
    title: 'Veins',
    price: 500,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031096/75246668_111282023671176_980770217426681856_n.jpg_i8lg6v.jpg',
    desc: '"Veins". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 45,
    title: 'Update Required',
    price: 500,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031065/77293550_111281910337854_1270199868706521088_n.jpg_xvhsqq.jpg',
    desc: '"Update Requierd". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 44,
    title: 'UFO',
    price: 500,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765031028/73147491_111281550337890_3500732760983601152_n.jpg_tzrjlg.jpg',
    desc: '"UFO". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 43,
    title: 'The First man',
    price: 600,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030940/75653304_111280753671303_5827063288185225216_n.jpg_mh1o9e.jpg',
    desc: '"The First". Ink. A3. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 42,
    title: 'Snake',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030895/72179333_111280680337977_2517368774152159232_n.jpg_ksa4ar.jpg',
    desc: '"Snake". Ink. A4. ',
    sold: true,
    variations: [],
},
{
    id: 41,
    title: 'SeaHorse',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030631/75407751_111280633671315_5191337368791023616_n.jpg_oj7rgp_dqxkke.jpg',
    desc: '"SeaHorse". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 40,
    title: 'Warrior',
    price: 600,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030424/75302685_111280293671349_2207029989419778048_n.jpg_fnvjdk.jpg',
    desc: '"Warrior". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 39,
    title: 'Road of Life',
    price: 1000,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030096/74981282_111280163671362_3452148911270002688_n.jpg_ml6wuo.jpg',
    desc: '"Road of Life". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 38,
    title: 'PomeGranates',
    price: 600,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765030040/78369790_111278890338156_8354023213935624192_n.jpg_lg0kvx.jpg',
    desc: '"PomeGranates". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 37,
    title: 'Moustang',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029896/77284170_111277970338248_3573199141418827776_n.jpg_byvtfz.jpg',
    desc: '"Moustang". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 36,
    title: 'Modern',
    price: 800,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029866/76779542_111277787004933_990682834442125312_n.jpg_q6ydhf.jpg',
    desc: '"Modern". Ink. A3. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 35,
    title: 'Woman World',
    price: 800,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029819/73539244_111277663671612_2875623712982302720_n.jpg_r9qyvc.jpg',
    desc: '"Woman world". Ink. A4. location: USA.',
    sold: false,
    variations: [],
},
{
    id: 34,
    title: 'Le Perro',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029781/78399515_111277577004954_7007491498522443776_n.jpg_ql3lek.jpg',
    desc: 'Le Perro. Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 33,
    title: 'Georgian Grape',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029668/74169784_111277313671647_6110520529741938688_n.jpg_zdpkhh.jpg',
    desc: '"Georgian Grape". A4.',
    sold: true,
    variations: [],
},

{
    id: 32,
    title: 'Palm',
    price: 1000,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029132/77258401_111277113671667_2852281008110174208_n.jpg_wtl7ic.jpg',
    desc: '"Palm". Ink. A4. location: Georgia. ',
    sold: false,
    variations: [],
},
{
    id: 31,
    title: 'Fishes',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029098/76705067_111276900338355_6128363825344282624_n.jpg_yxqbvu.jpg',
    desc: '"Fishes". Ink. A3.',
    sold: true,
    variations: [],
},
{
    id: 30,
    title: 'Family',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029070/75552923_111276717005040_6716850786724216832_n.jpg_yzmpol.jpg',
    desc: '"Family". Ink. A4.',
    sold: true,
    variations: [],
},
{
    id: 29,
    title: 'Eva',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029039/77111684_111276433671735_4140230902909239296_n.jpg_jlrnsy.jpg',
    desc: '"Eva". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 28,
    title: 'Earth Evolution',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765029003/76706766_111275927005119_4976833391925133312_n.jpg_mj6vdh.jpg',
    desc: '"Earth Evolution. Ink. A3." location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 26,
    title: 'Exclamation',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028960/76609812_111275727005139_80708723323961344_n.jpg_qvjgnq.jpg',
    desc: '"Exclamation". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 25,
    title: '25',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028916/75513462_111274987005213_951705473654980608_n.jpg_eohtbb.jpg',
    desc: 'The shimmer of modern city lights. location: Georgia.',
    sold: false,
    variations: [],
},
{
    id: 24,
    title: 'Different dimensions',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028885/77406093_111274750338570_5188783881884532736_n.jpg_ucufii.jpg',
    desc: '"Different dimensions". Ink. A3. location: USA.',
    sold: true,
    variations: [],
},

{
    id: 23,
    title: 'CinematoGraphy',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028835/75521832_111274603671918_6487201638481133568_n.jpg_jpy3a8.jpg',
    desc: '"CinematoGraphy". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 22,
    title: 'Chicken or Egg',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028760/76685751_111274470338598_6947738783924092928_n.jpg_pnj9te.jpg',
    desc: '"Chicken or Egg". Ink. A3.',
    sold: true,
    variations: [],
  },
  {
    id: 21,
    title: 'Bush',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028732/76259751_111274307005281_5948953974714400768_n.jpg_s4kin9.jpg',
    desc: '"Bush". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 20,
    title: 'Chaos',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028698/76607491_111273793671999_8528040217729302528_n.jpg_oockgt.jpg',
    desc: '"Chaos". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 19,
    title: 'Bar Code',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028644/74448238_111269273672451_1145884737563262976_n.jpg_zzmbtc.jpg',
    desc: '"Bar Code". Ink. A4. ',
    sold: true,
    variations: [],
  },
  {
    id: 18,
    title: 'Elephant',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028620/77313767_111268793672499_5878363524324917248_n.jpg_tnao5f.jpg',
    desc: '"Elephant". Ink. A4',
    sold: true,
    variations: [],
  },
  {
    id: 17,
    title: 'Africa',
    price: 350,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028578/78632429_111268800339165_1213324378469564416_n.jpg_jxsose.jpg',
    desc: '"Africa". Ink. A3. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 16,
    title: 'Aspiration',
    price: 450,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028535/78283334_111268770339168_3141689283337781248_n.jpg_ovtye7.jpg',
    desc: '"Aspiration". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 15,
    title: 'City of Future',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028505/76648975_111268297005882_7615935515069513728_n.jpg_dnzvlw.jpg',
    desc: '"City of the Future". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 14,
    title: 'Bouquet',
    price: 1200,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028466/75636127_111268190339226_2044083388385591296_n.jpg_ygcpdh.jpg',
    desc: '"Bouquet". Ink. A4. location: USA.',
    sold: false,
    variations: [],
  },
  {
    id: 13,
    title: 'Embryon',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028397/74271345_111251233674255_2324394948650074112_n.jpg_kcnns5.jpg',
    desc: '"Embryon". Ink, Saperavi, Coffe. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 12,
    title: 'Grandpa',   
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028355/77173200_111249950341050_8899040003858890752_n.png_rce3iv.png',
    desc: '"Grandpa". Ink.',
    sold: true,
    variations: [],
  },
  {
    id: 11,
    title: 'Saperavi',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028321/76693216_111249817007730_2878166217657417728_n.jpg_zw3g1b.jpg',
    desc: '"Saperavi". Ink.',
    sold: true,
    variations: [],
  },
  {
    id: 10,
    title: '',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028148/78365923_111249577007754_1811237611948212224_n.jpg_xv3jos.jpg',
    desc: '',
    sold: true,
    variations: [],
  },
  {
    id: 9,
    title: 'Wine',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765028045/75557494_111248580341187_6867369985786773504_n.jpg_ajzxpz.jpg',
    desc: '"Wine". With Saperavi wine. A3.',
    sold: true,
    variations: [],
  },
  {
    id: 8,
    title: 'Drunk',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027954/78098796_111247090341336_5962097635497082880_n.jpg_hreqgq.jpg',
    desc: '"Drunk". With Wine and Ink. A4.',
    sold: true,
    variations: [],
  },
  {
    id: 7,
    title: 'Galaxy',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027874/77217129_111228250343220_3123467068540715008_n.jpg_wk4ac8.jpg',
    desc: '"Galaxy". Ink. A4',
    sold: true,
    variations: [],
  },
  {
    id: 6,
    title: 'Hands',
    price: 1300,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027801/75362363_111228040343241_2981416810546462720_n.jpg_skadzl.jpg',
    desc: '"Hands". White and Silver Ink. 70X35 In (178 × 89 cm). location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 5,
    title: 'Eye of Wisdom',
    price: 1700,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027695/75224718_111228003676578_1693832765356638208_n.jpg_splpyd.jpg',
    desc: '"Eye of Wisdom". White Ink. A3. location: USA. ',
    sold: false,
    variations: [],
  },
  {
    id: 4,
    title: 'Sink',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027622/70703762_111227217009990_5450566437837996032_n.jpg_txsaiq.jpg',
    desc: '"Sink". Ink. A4. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 3,
    title: 'Sink Spiral',
    price: 950,
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027428/76191766_111226177010094_851467688654929920_n.jpg_udwwyx.jpg',
    desc: '"Sink Spiral". White Ink. A3. location: Georgia.',
    sold: false,
    variations: [],
  },
  {
    id: 2,
    title: 'Summer City',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765027223/72480660_111225327010179_2302704337308090368_n.jpg_enyqhw.jpg',
    desc: '"Summer City". Ink. A3.',
    sold: true,
    variations: [],
  },
  {
    id: 1,
    title: 'Ocean',
    img: 'https://res.cloudinary.com/dri8nh3tr/image/upload/v1765026038/75594637_111220637010648_3788774609545854976_n.jpg_ngcd5r.jpg',
    desc: '"Ocean". White Ink. 35X70 In (89 × 178 cm).  ',
    sold: true,
    variations: [],
  } 
];


const clothPrints = [
  { id: 1011,
    title: 
    'Hero Painting 1',
    price: 270,
    img: 'imgs/first-imgs/a4.png',
    desc: 'The shimmer of modern city lights.', sold: true,
    hidden: true,
    variations: ['imgs/1.jpg',
                 'imgs/2.jpg', 
                 'imgs/3.jpg'],

  },

  { id: 1010,
    title: 
    'Hero Painting 2',
    price: 270,
    img: 'imgs/first-imgs/a2.png',
    desc: 'The shimmer.', sold: false,
    variations: [],
  },

       
];


const heroImages = document.querySelectorAll('.hero-image-wrapper .hero-img');
heroImages.forEach(img => {
  img.addEventListener('click', () => {
    const paintingId = img.getAttribute('data-id');
    if (paintingId) window.location.href = `painting.html?id=${paintingId}`;
  });
});

/**
 * @param {string} path 
 * @returns {boolean}
 */
function isVideo(path) {
  if (!path) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  const lowerCasePath = path.toLowerCase();
  return videoExtensions.some(ext => lowerCasePath.endsWith(ext));
}

function renderGallery(dataArray, listId, detailsPage = 'painting.html') {
  const galleryList = document.getElementById(listId);
  if (!galleryList) return;

  dataArray
    .filter(p => !p.hidden)
    .forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      if (p.sold) card.classList.add('sold');
      const mediaElement = `<img class="lazy-img gallery-img" src="${p.img}" alt="${escapeHtml(p.title)}" data-id="${p.id}" loading="lazy">`;
card.innerHTML = `
    ${mediaElement}
    <span class="card-id">#${p.id}</span>
    <div class="overlay">
        <h3>${escapeHtml(p.title)}</h3>
        ${!p.sold ? `<p>${p.price} $</p>` : ''}
    </div>
    ${p.sold ? '<div class="sold-label">SOLD</div>' : ''}
`;


      card.addEventListener('click', (e) => {
        window.location.href = `${detailsPage}?id=${p.id}`;
      });

      galleryList.appendChild(card);
    });
}

document.querySelectorAll(".lazy-img").forEach(img => {
    img.onload = () => {
        img.src = img.dataset.full; 
    };
});


function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

try {
  renderGallery(paintings, 'gallery-list', 'painting.html');
  renderGallery(clothPrints, 'cloth-gallery-list', 'painting.html');
} catch (err) {

}

function findProductData(id) {
  if (!id && id !== 0) return null;
  const nid = Number(id);
  let data = Array.isArray(paintings) ? paintings.find(p => Number(p.id) === nid) : undefined;
  if (!data && Array.isArray(clothPrints)) {
    data = clothPrints.find(p => Number(p.id) === nid);
  }
  return data || null;
}

const mainPainting = document.getElementById('main-painting');
const mainPaintingVideo = document.getElementById('main-painting-video');
const mainPaintingWrapper = document.getElementById('main-painting-wrapper');
const carouselBox = document.getElementById('carousel-box');

/**
 * @param {string} src 
 */
function setMainMedia(src) {
    if (isVideo(src)) {
        if (mainPaintingVideo) {
            mainPaintingVideo.src = src;
            mainPaintingVideo.style.display = 'block';
            mainPaintingVideo.play();
        }
        if (mainPainting) mainPainting.style.display = 'none';
    } else {
        if (mainPainting) {
            mainPainting.src = src;
            mainPainting.style.display = 'block';
        }
        if (mainPaintingVideo) {
            mainPaintingVideo.pause();
            mainPaintingVideo.style.display = 'none';
        }
    }
}

if (mainPaintingWrapper) {
  const id = new URLSearchParams(window.location.search).get("id");
  const product = findProductData(id);

  if (product) {
    setMainMedia(product.img); 

    mainPaintingWrapper.addEventListener('click', () => openModalProduct(product));


    if (carouselBox) {
      carouselBox.innerHTML = "";

      const variants = (Array.isArray(product.variations) ? product.variations : [])
        .concat(Array.isArray(product.videos) ? product.videos : [])
        .filter((value, index, self) => self.indexOf(value) === index); 
     
      variants.forEach(src => {
        const isMediaVideo = isVideo(src);
        
        const mediaElement = document.createElement(isMediaVideo ? "video" : "img");
        mediaElement.src = src;
        mediaElement.alt = product.title || 'variant';
        mediaElement.className = 'variant-img';
        
        if(isMediaVideo) {
            mediaElement.setAttribute('preload', 'metadata');
            mediaElement.setAttribute('poster', product.img); 
            mediaElement.setAttribute('playsinline', ''); 
        }
        
        mediaElement.addEventListener('click', (e) => {
          e.stopPropagation();
          
          if(isMediaVideo) {
              setMainMedia(src); 
          } else {
              setMainMedia(src); 
          }
          
          openModalImage(src, product.title, `$${product.price}`, product.desc); 
        });
        carouselBox.appendChild(mediaElement);
      });
    }
  }
}

const paintingImg = document.getElementById('painting-img');
const paintingVideo = document.getElementById('painting-video');
const paintingImgWrapper = document.querySelector('.painting-image'); 
const paintingTitle = document.getElementById('painting-title');
const paintingPrice = document.getElementById('painting-price');
const paintingDesc = document.getElementById('painting-desc');


/**
 * @param {string} src 
 */
function setDetailsMainMedia(src) {
    if (isVideo(src)) {
        if (paintingVideo) {
            paintingVideo.src = src;
            paintingVideo.style.display = 'block';
            paintingVideo.play();
        }
        if (paintingImg) paintingImg.style.display = 'none';
    } else {
        if (paintingImg) {
            paintingImg.src = src;
            paintingImg.style.display = 'block';
        }
        if (paintingVideo) {
            paintingVideo.pause();
            paintingVideo.style.display = 'none';
        }
    }
}


if (paintingImgWrapper && paintingTitle && paintingPrice && paintingDesc) {
  const id = new URLSearchParams(window.location.search).get("id");
  const product = findProductData(id);

  if (product) {
    setDetailsMainMedia(product.img); 

    paintingTitle.innerText = product.title || '';
    paintingPrice.innerText = `$${product.price || 0}`;
    paintingDesc.innerText = product.desc || '';

    const isClothProduct = Array.isArray(clothPrints) && clothPrints.some(p => Number(p.id) === Number(product.id));
    
    if (isClothProduct && !document.querySelector('.signature-highlight')) {
      const signatureNote = document.createElement('p');
      signatureNote.className = 'signature-highlight';
      signatureNote.style.cssText = `
        font-size: 1.1em;
        margin-top: 15px;
        padding: 10px;
        border: 1px dashed #FF6B6B;
        color: #FF6B6B;
        background-color: #FFF0F0;
        font-weight: bold;
        text-align: center;
        border-radius: 5px;
      `;


    }

    paintingImgWrapper.addEventListener('click', () => {
        let currentSrc = paintingImg.style.display === 'block' ? paintingImg.src : paintingVideo.src;
        openModalImage(currentSrc, product.title, `$${product.price}`, product.desc);
    });
    
    const detailsVariantsContainer = document.getElementById('details-variants');
    const fallbackVariantsContainer = document.getElementById('carousel-box'); 
    const containerToUse = detailsVariantsContainer || fallbackVariantsContainer;


    if (containerToUse) {
      containerToUse.innerHTML = ''; 
      
      const variants = (product.variations && product.variations.length ? product.variations : [])
        .concat(product.videos && product.videos.length ? product.videos : [])
        .filter((value, index, self) => self.indexOf(value) === index); 

      variants.forEach(src => {
        const isMediaVideo = isVideo(src);
        
        const v = document.createElement(isMediaVideo ? "video" : "img");
        v.src = src;
        v.alt = product.title || 'variant';
        v.className = 'variant-img';
        
        if(isMediaVideo) {
            v.setAttribute('preload', 'metadata');
            v.setAttribute('poster', product.img); 
            v.setAttribute('loop', '');
            v.setAttribute('muted', '');
            v.setAttribute('playsinline', ''); 
        }

        v.addEventListener('click', () => {
            setDetailsMainMedia(src); 
            openModalImage(src, product.title, `$${product.price}`, product.desc); 
        });
        containerToUse.appendChild(v);
      });
    }

    if (product.sold) {
      const soldBadge = document.createElement('div');
      soldBadge.className = 'sold-label';
      soldBadge.innerText = 'SOLD';

      const wrapper = paintingImgWrapper;
      wrapper.appendChild(soldBadge);
    }
  }
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.innerText = new Date().getFullYear();

const range = document.getElementById("sizeRange");
const sizeValue = document.getElementById("sizeValue");
const priceValue = document.getElementById("priceValue");
const resValue = document.getElementById("resValue");
const painting = document.getElementById("paintingSlider"); 
const unitSelect = document.getElementById("unitSelect");

let baseSize = 30; 
let basePrice = 100; 
let pricePer10cm = 10; 
let baseResolution = { width: 3000, height: 2000 }; 

function getSizeCM() {
    if (!range) return baseSize;
    return parseInt(range.value, 10) || baseSize;
}

function updateSize() {
    if (!sizeValue || !unitSelect) return;
    const sizeCM = getSizeCM();

    if (unitSelect.value === "cm") {
        sizeValue.textContent = sizeCM + " cm";
    } else {

        sizeValue.textContent = (sizeCM / 30.48).toFixed(2) + " ft";
    }
}

function updateEverything() {
    if (!priceValue || !resValue || !painting) return;
    const newSize = getSizeCM();
    
    updateSize();

    const sizeDifference = newSize - baseSize;
    const added = (sizeDifference / 10) * pricePer10cm;
    const newPrice = basePrice + added;
    priceValue.textContent = newPrice.toFixed(2);

    const scale = 1 + sizeDifference / 200;
    painting.style.transform = `scale(${scale})`;

    const resolutionScale = newSize / baseSize;
    
    const newW = Math.round(baseResolution.width * resolutionScale);
    const newH = Math.round(baseResolution.height * resolutionScale);
    resValue.textContent = `${newW} x ${newH}`;
}

if (range) {
    range.addEventListener("input", updateEverything);
}

if (unitSelect) {
    unitSelect.addEventListener("change", updateEverything); 
}

updateEverything();

const aboutBtn = document.querySelector('.about-btn');
if (aboutBtn) {
  aboutBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const gallery = document.querySelector('#gallery');
    if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
  });
}

function updateModalContent() { 
    if (currentModalMediaList.length === 0) return;

    const mediaSrc = currentModalMediaList[currentModalIndex];
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.getElementById('modal-video');
    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');

    const isMediaVideo = isVideo(mediaSrc);

    if (modalImg) modalImg.style.display = 'none';
    if (modalVideo) {
        modalVideo.pause();
        modalVideo.style.display = 'none';
    }

    if (isMediaVideo) {
        if (modalVideo) {
            modalVideo.src = mediaSrc;
            modalVideo.style.display = 'block';
            modalVideo.play();
        }
    } else {
        if (modalImg) {
            modalImg.src = mediaSrc;
            modalImg.style.display = 'block';
        }
    }

    const isCloth = Array.isArray(clothPrints) &&
                  clothPrints.some(p => 
                      (p.variations && p.variations.includes(mediaSrc)) || 
                      (p.videos && p.videos.includes(mediaSrc)) || 
                      (p.img === mediaSrc)
                  );
    
    const currentProductId = new URLSearchParams(window.location.search).get("id");
    const currentProduct = findProductData(currentProductId);

    if (isCloth && isMediaVideo) { 

        if (modalTitle) modalTitle.innerText = '';
        if (modalPrice) modalPrice.innerText = '';
        if (modalDesc) modalDesc.innerText = '';
    } else if (currentProduct) {

        if (modalTitle) modalTitle.innerText = currentProduct.title || '';
        if (modalPrice) modalPrice.innerText = `$${currentProduct.price || 0}`;
        if (modalDesc) modalDesc.innerText = currentProduct.desc || '';
    }
}

function showNextMedia() { 
    if (currentModalMediaList.length > 1) {
        currentModalIndex = (currentModalIndex + 1) % currentModalMediaList.length;
        updateModalContent();
    }
}

function showPrevMedia() { 
    if (currentModalMediaList.length > 1) {
        currentModalIndex = (currentModalIndex - 1 + currentModalMediaList.length) % currentModalMediaList.length;
        updateModalContent();
    }
}


function openModalProduct(product) {
  if (!product) return;

    currentModalMediaList = [product.img]
        .concat(Array.isArray(product.variations) ? product.variations : [])
        .concat(Array.isArray(product.videos) ? product.videos : [])
        .filter((value, index, self) => self.indexOf(value) === index); 

    let currentSrc;
    if (mainPainting && mainPainting.style.display === 'block') {
        currentSrc = mainPainting.src;
    } else if (mainPaintingVideo && mainPaintingVideo.style.display === 'block') {
        currentSrc = mainPaintingVideo.src;
    } else if (paintingImg && paintingImg.style.display === 'block') { 
        currentSrc = paintingImg.src;
    } else if (paintingVideo && paintingVideo.style.display === 'block') { 
        currentSrc = paintingVideo.src;
    } else {
        currentSrc = product.img; 
    }
    
    currentModalIndex = currentModalMediaList.indexOf(currentSrc);
    if(currentModalIndex === -1) currentModalIndex = 0;

  openModalImage(currentSrc, product.title || '', `$${product.price || 0}`, product.desc || '');
}

function openModalImage(mediaSrc, title, price, desc) { 
    const modal = document.getElementById('modal');
    if (!modal) return;

    const modalTitle = document.getElementById('modal-title');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');

    if (window.location.pathname.includes('painting.html')) {
        const currentProductId = new URLSearchParams(window.location.search).get("id");
        const currentProduct = findProductData(currentProductId);
        if (currentProduct) {
             currentModalMediaList = [currentProduct.img]
                .concat(currentProduct.variations && currentProduct.variations.length ? currentProduct.variations : [])
                .concat(currentProduct.videos && currentProduct.videos.length ? currentProduct.videos : [])
                .filter((value, index, self) => self.indexOf(value) === index); 
            
            currentModalIndex = currentModalMediaList.indexOf(mediaSrc);
            if(currentModalIndex === -1) currentModalIndex = 0; 

            if (modalTitle) modalTitle.innerText = title || '';
            if (modalPrice) modalPrice.innerText = price || '';
            if (modalDesc) modalDesc.innerText = desc || '';
        }
    } else if (currentModalMediaList.length === 0) {

         currentModalMediaList = [mediaSrc];
         currentModalIndex = 0;
         if (modalTitle) modalTitle.innerText = title || '';
         if (modalPrice) modalPrice.innerText = price || '';
         if (modalDesc) modalDesc.innerText = desc || '';
    }

    modal.style.display = "block";
    document.body.style.overflow = 'hidden';

    updateModalContent(); 
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  const modalVideo = document.getElementById('modal-video');
  if (modalVideo) modalVideo.pause();

  modal.style.display = "none";
  document.body.style.overflow = '';
  currentModalMediaList = []; 
  currentModalIndex = 0;
}

(function modalInit() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  const closeBtn = document.querySelector('.modal-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
})();

(function modalNavButtonsInit() {
    const prevBtn = document.getElementById('modal-prev-btn');
    const nextBtn = document.getElementById('modal-next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            showPrevMedia();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            showNextMedia();
        });
    }
})();

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('scrollToContact');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      const target = document.getElementById('contact');
      if (!target) {
        console.warn('Element with id="contact" not found.');
        return;
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });


