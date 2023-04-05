/* var studyMaterials = document.getElementById("study-materials");
var essayCollection = document.querySelector(".essay-collection");

studyMaterials.addEventListener("click", function() {
  essayCollection.classList.toggle("hidden");
}); */


$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );
  });

});


/* Check Mobile data is on/off */

if (!window.navigator.onLine) {
  // create overlay element
  var overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '9998';
  overlay.style.backdropFilter = 'blur(5px)';

  // create dialog box element
  var dialogBox = document.createElement('div');
  dialogBox.innerHTML = 'No internet connection. Please check your network settings.';
  dialogBox.style.background = 'rgba(0, 0, 0, 0.1)';
  dialogBox.style.color = 'red';
  dialogBox.style.fontSize = '16px';
  dialogBox.style.padding = '20px';
  dialogBox.style.position = 'absolute';
  dialogBox.style.top = '50%';
  dialogBox.style.left = '50%';
  dialogBox.style.transform = 'translate(-50%, -50%)';
  dialogBox.style.zIndex = '9999';
  dialogBox.style.textAlign = 'center';
  dialogBox.style.borderRadius = '15px';
  dialogBox.style.boxShadow = '20px 20px 50px rgba(0, 0, 0, 0.5)';
  dialogBox.style.overflow ='hidden';

  // append the overlay and dialog box to the body
  document.body.appendChild(overlay);
  document.body.appendChild(dialogBox);
}

