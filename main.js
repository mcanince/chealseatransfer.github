// local reviews data
const reviews = [
  {
    id: 0,
    name: "Baba",
    job: "Defans 6.5M",
    img: "https://images.daznservices.com/di/library/GOAL/d3/28/baba-rahman-chelsea_x97hm20bau75198kc3yelgkip.jpg?t=-673581264&amp;quality=60&amp;w=1000",
    text: "Takımda bir abi arıyorsan tam sana göre kardeşim kendisi memur çoçuğu bir eli yağda bir eli balda büyümüş görmüş gezmiş efendi biridir aynısını ben kendim kullanıyorum şuana kadar bir sıkıntı görmedim kargo iyi paketlenmişti",
  },
  {
    id: 1,
    name: "Werner",
    job: "Forvet 32.8M",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCEDP9s-xGn2YupZa3yhgf1TISA-9wFq_4VA&usqp=CAU",
    text: "Çok haşin bir delikanlıdır,bazen 3iq konuşur ben büyüyünce messi olacam diye neyse ki gökayın videolarını izletip yola getirtiyorum ama ben kefilim 1 veriyorsun yarın 3'e satıyorsun temiz para kanka",
  },
  {
    id: 2,
    name: "Carlos",
    job: "Karışık",
    img: "./Screenshot_20201231-212900_YouTube.jpg",
    text: "6 Aydır top görmedi delleniyor oğlan",
  },
  {
    id: 3,
    name: "Kante",
    job: "Orta Sahaydı galiba 28.3M",
    img: "https://i2-prod.football.london/incoming/article18449427.ece/ALTERNATES/s810/0_GettyImages-1195220637.jpg",
    text: "Elimde büyüdü keraneci bunun garantisi benim kardeşim bir şey olursa gel getir değiştiririz bizde kolpa olmaz hadi hayırlı olsun",
  },
  {
    id: 4,
    name: "Drinkwater",
    job: "Hamidiye 11.1M",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZF7igo71iMvWG0ZKLAZ8ADWCs6VyQn8kShQ&usqp=CAU",
    text: "Bir kişi daha su iç esprisi daha yaparsa yakarım ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;


window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);


});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
nextBtn.addEventListener("click", function() {    
  currentItem++;
  if (currentItem > reviews.length-1) {
    currentItem = 0;
  }
  showPerson(currentItem);
})

prevBtn.addEventListener("click", function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
})


randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
})