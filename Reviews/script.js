const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuUfoj_F10xJDt0s1GqDmhNZYxwazXWjwj7oSdmL4mw&s",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPAQ0D1r2tLq6zx1NnKpfyNS-IKjRmMqt6KIme_9MJw&s",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const author = document.querySelector('.author');
const role = document.querySelector('.role');
const content = document.querySelector('.content');
const image = document.querySelector('img');
const leftBtn = document.querySelector('.fa-arrow-left');
const rightBtn = document.querySelector('.fa-arrow-right');
const surpriseBtn = document.querySelector('.surprisebtn');

let currentContet =0;
const ascendContent = function(){
   if(currentContet<reviews.length) {
    currentContet++;
   }else{
    currentContet =0;
   }
   author.textContent=reviews[currentContet].name;
   role.textContent=reviews[currentContet].job;
   content.textContent=reviews[currentContet].text;
   image.src=reviews[currentContet].img;
}

const decendContent = function(){
    if(currentContet<0) {
     currentContet=reviews.length-1;
    }else{
     currentContet--;
    }
    author.textContent=reviews[currentContet].name;
    role.textContent=reviews[currentContet].job;
    content.textContent=reviews[currentContet].text;
    image.src=reviews[currentContet].img;
 }

 const surpriseContent = function(){
    const randomNum = Math.trunc(Math.random()*reviews.length);
    currentContet=randomNum;
    author.textContent=reviews[currentContet].name;
    role.textContent=reviews[currentContet].job;
    content.textContent=reviews[currentContet].text;
    image.src=reviews[currentContet].img;
 }
 ascendContent();
leftBtn.addEventListener('click',decendContent);
rightBtn.addEventListener('click',ascendContent);
surpriseBtn.addEventListener('click',surpriseContent);