import Rellax from 'rellax';

var logoElements = document.querySelectorAll('.letter__elemnt');

window.onload = function() {
  var boxElements = document.querySelector('.nav-i');
  boxElements.classList.add('active-nav');
  for (var i = 0; i < logoElements.length; i++) {
    logoElements[i].classList.add('active');
  };
};

var rellax = new Rellax('.rellax');

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


var projectBox=document.querySelectorAll('.box--product');
var projectFull=document.querySelectorAll('.project--full');

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

var hiddenTextxs = document.querySelectorAll(".box--product__description__long");

if (window.matchMedia('(max-width: 639px)').matches) {
  document.querySelector('.hidden-xs').innerHTML = "";
  for (let i = 0; i < projectBox.length; i++) {
    projectBox[i].addEventListener('click', function() {
      hiddenTextxs[i].classList.add('active');
    });
  }
}

/**/




