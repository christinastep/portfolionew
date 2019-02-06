////// PARALAX ////////
import Rellax from 'rellax';
var rellax = new Rellax('.rellax');


////// NAVIGATION ////////
var logoElements = document.querySelectorAll('.letter__elemnt');

window.onload = function() {
  var boxElements = document.querySelector('.nav-i');
  boxElements.classList.add('active-nav');
  for (var i = 0; i < logoElements.length; i++) {
    logoElements[i].classList.add('active');
  };
};


////// SCROLLEVENTS ////////
window.addEventListener('load', function() {
  
  if (window.matchMedia('(min-width: 640px)').matches) {
    window.onscroll = function() {
      if (document.documentElement.scrollTop > window.innerHeight ) {
        document.getElementById('about').classList.add('visible');
        if (document.documentElement.scrollTop > window.innerHeight*1.15) {
          var headlineElementsAbout = document.querySelectorAll('.word--about > div');
          for (let i = 0; i < headlineElementsAbout.length; i++) {
            headlineElementsAbout[i].classList.add('animationActive');
          }
          if (document.documentElement.scrollTop > window.innerHeight*1.25) {
            document.querySelector('body').classList.add('scroll');
            if (document.documentElement.scrollTop > window.innerHeight*2.4) {
              document.querySelector('body').classList.add('scrollsuper');
              var headlineElementsProjects = document.querySelectorAll('.word--project > div');
              for (let i = 0; i < headlineElementsProjects.length; i++) {
                headlineElementsProjects[i].classList.add('animationActive');
              }
            }
          }
        }  
      }
      else{
        var headlineElements = document.querySelectorAll('.word--headline > div');
        for (let i = 0; i < headlineElements.length; i++) { 
          headlineElements[i].classList.remove('animationActive');
        };
        document.getElementById('about').classList.remove('visible');
        document.querySelector('body').classList.remove('scroll');
        document.querySelector('body').classList.remove('scrollsuper');
 
      }
    }
  }
});

////// PRODICTBOX ////////
var projectBox=document.querySelectorAll('.box--product');
var projectFull=document.querySelectorAll('.project--full');


//// min sm ////
if (window.matchMedia('(min-width: 640px)').matches) {
  for (let i = 0; i < projectBox.length; i++) {
    projectBox[i].addEventListener('click', function() {
      projectFull[i].classList.add('active');
      console.log(projectFull[i].style.top = projectBox[i].offsetTop);
      projectFull[i].style.top = projectBox[i].offsetTop+ 'px';
      for (let i = 0; i < projectBox.length; i++) {
        projectBox[i].style.backgroundColor = 'black';
      }
      projectBox[i].style.backgroundColor = 'white';
      document.querySelector('body').classList.add('stop-scrolling');
    

    });
    
    projectFull[i].addEventListener('click', function() {
      projectFull[i].classList.remove('active');
      document.querySelector('body').classList.remove('stop-scrolling');
      for (let i = 0; i < projectBox.length; i++) {
        projectBox[i].style.backgroundColor = 'white';
      }
    });
  }
}

//// max xs ////
var hiddenTextxs = document.querySelectorAll(".box--product__description__long");

if (window.matchMedia('(max-width: 639px)').matches) {
  document.querySelector('.hidden-xs').innerHTML = "";
  for (let i = 0; i < projectBox.length; i++) {
    projectBox[i].addEventListener('click', function() {
      hiddenTextxs[i].classList.add('active');
    });
  }
}


//// letter ////
var box = document.querySelectorAll('.box');
var words = ["about", "projects", "contacts", "about", "projects", "contacts"];

for (let j = 0; j < words.length; j++) {
  
  let word = words[j];

  console.log(box[j]);

  for (let i = 0; i < word.length; i++) {
    
    if (word[i] === "a"){
    box[j].innerHTML +=
      '<div class="letter a letter3">' +
      '<div class="letter__elemnt letterStart"></div>' +
      '<div class="letter__elemnt letterLeft a2"></div>' + 
      '<div class="letter__elemnt letterLeft a3"></div>' +
      '<div class="letter__elemnt letterRight a4"></div>' +
      '<div class="letter__elemnt letterRight a5"></div>' +
      '<div class="letter__elemnt letterEnd"></div>' +
      '</div>';
 }
    if (word[i] === "b"){
      box[j].innerHTML +=
        '<div class="letter b letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft b2"></div>' + 
        '<div class="letter__elemnt letterLeft b3"></div>' +
        '<div class="letter__elemnt letterRight b4"></div>' +
        '<div class="letter__elemnt letterRight b5 "></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "c"){
      box[j].innerHTML +=
        '<div class="letter c letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft c2"></div>' + 
        '<div class="letter__elemnt letterLeft c3"></div>' +
        '<div class="letter__elemnt letterRight c4"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "d"){
      box[j].innerHTML +=
        '<div class="letter d letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft d2"></div>' + 
        '<div class="letter__elemnt letterLeft d3"></div>' +
        '<div class="letter__elemnt letterRight d4"></div>' +
        '<div class="letter__elemnt letterRight d5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "e"){
      box[j].innerHTML +=
        '<div class="letter e letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft e2"></div>' + 
        '<div class="letter__elemnt letterLeft e3"></div>' +
        '<div class="letter__elemnt letterRight e4"></div>' +
        '<div class="letter__elemnt letterRight e5"></div>' +
        '<div class="letter__elemnt letterRight e6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "f"){
      box[j].innerHTML +=
        '<div class="letter f letter2">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft f2"></div>' + 
        '<div class="letter__elemnt letterLeft f3"></div>' +
        '<div class="letter__elemnt letterLeft f4"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "g"){
      box[j].innerHTML +=
        '<div class="letter g letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft g2"></div>' + 
        '<div class="letter__elemnt letterLeft g3"></div>' +
        '<div class="letter__elemnt letterRight g4"></div>' +
        '<div class="letter__elemnt letterRight g5"></div>' +
        '<div class="letter__elemnt letterRight g6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "h"){
      box[j].innerHTML +=
        '<div class="letter h letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft h2"></div>' + 
        '<div class="letter__elemnt letterLeft h3"></div>' +
        '<div class="letter__elemnt letterRight h4"></div>' +
        '<div class="letter__elemnt letterRight h5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "i"){
      box[j].innerHTML +=
        '<div class="letter i letter1">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft i2"></div>' + 
        '<div class="letter__elemnt letterLeft i3"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "j"){
      box[j].innerHTML +=
        '<div class="letter j letter2">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft j4"></div>' + 
        '<div class="letter__elemnt letterLeft j5"></div>' +
        '<div class="letter__elemnt letterLeft j6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "k"){
      box[j].innerHTML +=
        '<div class="letter k letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft k2"></div>' + 
        '<div class="letter__elemnt letterRight k4"></div>' +
        '<div class="letter__elemnt letterRight k5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "l"){
      box[j].innerHTML +=
        '<div class="letter l letter1">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft l3"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "m"){
      box[j].innerHTML +=
        '<div class="letter m letter5">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft m2"></div>' + 
        '<div class="letter__elemnt letterLeft m3"></div>' +
        '<div class="letter__elemnt letterRight m4"></div>' +
        '<div class="letter__elemnt letterRight m5"></div>' +
        '<div class="letter__elemnt letterCenter m6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "n"){
      box[j].innerHTML +=
        '<div class="letter n letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft n2"></div>' + 
        '<div class="letter__elemnt letterLeft n3"></div>' +
        '<div class="letter__elemnt letterRight n5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "o"){
      box[j].innerHTML +=
        '<div class="letter o letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft o2"></div>' + 
        '<div class="letter__elemnt letterLeft o3"></div>' +
        '<div class="letter__elemnt letterRight o4"></div>' +
        '<div class="letter__elemnt letterRight o5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "p"){
      box[j].innerHTML +=
        '<div class="letter p letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft p2"></div>' + 
        '<div class="letter__elemnt letterLeft p3"></div>' +
        '<div class="letter__elemnt letterRight p4"></div>' +
        '<div class="letter__elemnt letterRight p5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "q"){
      box[j].innerHTML +=
        '<div class="letter q letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterRight q2"></div>' + 
        '<div class="letter__elemnt letterLeft q3"></div>' +
        '<div class="letter__elemnt letterLeft q4"></div>' +
        '<div class="letter__elemnt letterRight q5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "r"){
      box[j].innerHTML +=
        '<div class="letter r letter2">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft r2"></div>' + 
        '<div class="letter__elemnt letterLeft r3"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "s"){
      box[j].innerHTML +=
        '<div class="letter s letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft s2"></div>' + 
        '<div class="letter__elemnt letterLeft s3"></div>' +   
        '<div class="letter__elemnt letterRight s4"></div>' +
        '<div class="letter__elemnt letterRight s5"></div>' +
        '<div class="letter__elemnt letterRight s6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "t"){
      box[j].innerHTML +=
        '<div class="letter t letter2">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft t2"></div>' + 
        '<div class="letter__elemnt letterLeft t3"></div>' +
        '<div class="letter__elemnt letterLeft t4"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "u"){
      box[j].innerHTML +=
        '<div class="letter u letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft u2"></div>' + 
        '<div class="letter__elemnt letterLeft u3"></div>' +
        '<div class="letter__elemnt letterRight u5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "v"){
      box[j].innerHTML +=
        '<div class="letter v letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft v2"></div>' + 
        '<div class="letter__elemnt letterCenter v3"></div>' +
        '<div class="letter__elemnt letterRight v5"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "w"){
      box[j].innerHTML +=
        '<div class="letter w letter5">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft w2"></div>' + 
        '<div class="letter__elemnt letterLeft w3"></div>' +
        '<div class="letter__elemnt letterRight w4"></div>' +
        '<div class="letter__elemnt letterRight w5"></div>' +
        '<div class="letter__elemnt letterCenter w6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "x"){
      box[j].innerHTML +=
        '<div class="letter x letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft x2"></div>' + 
        '<div class="letter__elemnt lettercenter x3"></div>' +
        '<div class="letter__elemnt letterLeft x5"></div>' +
        '<div class="letter__elemnt letterRight x6"></div>' +
        '<div class="letter__elemnt letterRight x6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "y"){
      box[j].innerHTML +=
        '<div class="letter y letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterLeft y2"></div>' + 
        '<div class="letter__elemnt letterLeft y3"></div>' +
        '<div class="letter__elemnt letterRight y4"></div>' +
        '<div class="letter__elemnt letterRight y6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "z"){
      box[j].innerHTML +=
        '<div class="letter z letter3">' +
        '<div class="letter__elemnt letterStart"></div>' +
        '<div class="letter__elemnt letterRight z2"></div>' + 
        '<div class="letter__elemnt letterLeft z3"></div>' +
        '<div class="letter__elemnt letterRight z4"></div>' +
        '<div class="letter__elemnt letterLeft z5"></div>' +
        '<div class="letter__elemnt letterRight z6"></div>' +
        '<div class="letter__elemnt letterEnd"></div>' +
        '</div>';
    }
    if (word[i] === "."){
      box[j].innerHTML +=
        '<div class="letter point letter1">' +
        '<div class="letter__elemnt letterRight point1"></div>' + 
        '</div>';
    }
    if (word[i] === ","){
      box[j].innerHTML +=
        '<div class="letter comma letter1">' +
        '<div class="letter__elemnt letterRight comma1"></div>' + 
        '</div>';
    }
    if (word[i] === ":"){
      box[j].innerHTML +=
        '<div class="letter signSentence douplePoint letter1">' +
        '<div class="letter__elemnt letterRight douplePoint1"></div>' + 
        '<div class="letter__elemnt letterRight douplePoint2"></div>' + 
        '</div>';
    }
  }
  var letter = document.querySelectorAll('.letter');
  for (let i = 0; i < letter.length; i++) {
    letter[i].classList.add("connectionEnd");
    letter[i].classList.add("active");
  };
}








