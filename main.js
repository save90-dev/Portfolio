//SCRIPT FOR THE CAROUSEL WORDS
var words=['Project Manager', 'Web Developer', 'Problem Solver', 'Scrum Master', 'Business Acumen', 'Curious'];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words,1000);
function update_carousel_words(){
    word.innerHTML = words[counter];
    counter++;
if( counter >= words.length){
    counter = 0
    }
}

//SCRIPT FOR THE BACK TO TOP BUTTON

mybutton = document.getElementsByClassName("back-to-top")

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.back-to-top').fadeIn();
     }
    else
     {
      $('.back-to-top').fadeOut();
     }
 });

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


