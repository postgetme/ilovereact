window.onload = function() {
    animateLogo();
    animateRobot();
    updateSliderControl();
    addSmoothScrolling();
};

window.onscroll = function() {
    updateSliderControl();
};

function animateLogo() {
    TweenMax.fromTo(".react-logo",2.5, {
        css: {
          y: "30px",
        }
        },{
        css: {
          y: "-30px",
        },
        repeat: -1,
        yoyo: true,
        ease: Power2.easeInOut,
      }
    );
}

function animateRobot() {
    var t = new TimelineMax({ repeat: -1});
    t.to("#android-robot",0.4,{rotation: "-=15deg"});
    t.to("#android-robot",0.4,{rotation: "+=25deg"});
    t.to("#android-robot",0.4,{rotation: "-=10deg"});
}

function updateSliderControl() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    var section = document.querySelector(link.getAttribute("href"));
    var sectionTop = section.offsetTop;
    var sectionBottom = sectionTop + section.getBoundingClientRect().height;

    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    if (typeof window.addEventListener === 'function'){
        (function (_link) {
            link.addEventListener('click', function(event){
                event.preventDefault();

                var href = _link.getAttribute("href");

                scrollToElement(document.querySelector(href));
            });
        })(link);
    }
  }
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}