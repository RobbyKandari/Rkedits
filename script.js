var typed = new Typed(".auto-type", {
  strings: ["Web Developer....","Web designer....","Freelancer....","Video Editor...."],
  typeSpeed: 50,
  backSpeed: 50,
  looped: true
});
 
<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
          


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







var typed = new Typed('#hi', {
  strings: ['Web Developer', 'Freelancer ', 'Video Editor'],
  typeSpeed: 50,
});

