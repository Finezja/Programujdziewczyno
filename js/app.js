'use strict';

 document.addEventListener('DOMContentLoaded', function() {
     
     //zadanie 1
      
    var materialy = document.querySelector('.for-dropdown');
    var strony = document.querySelector('.dropdown');
    
    materialy.addEventListener('mouseover', function() {
    strony.style.display = "block";
    });
     
    materialy.addEventListener('mouseout', function() {
    strony.style.display = "none";
    });
     
     // zadanie 2
     
  var buttons = document.querySelectorAll('.read-more');

  function showHide() {

    var textArea = this.previousElementSibling;
   
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = 'block';
      this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }
     for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
     
     //zadanie 3
     
     var menu = document.querySelector('.navbar-fixed-top');
     
     window.addEventListener('scroll', function() {
       menu.style.borderBottom="1px solid #7f7f7f";   
     });
     
     // zadanie 4
     
     var button = document.querySelector('.button-up');
     
     button.addEventListener('click', function() {
         window.scroll(0,0);
     })

     // zadanie 5
     
     var items = document.querySelectorAll('.org');
     console.log(items);
     var dots = document.querySelectorAll('.dot');
     console.log(dots);
     
     dots[0].addEventListener('click', function() {
       for(var i = 0; i<=dots.length; i++) {
          dots[i].classList.remove('active');
          items[i].classList.remove('visible');}
    
       this.classList.add('active');
       items[0].classList.add('visible');
     
     });
     
      dots[1].addEventListener('click', function() {
       for(var i = 0; i<=dots.length; i++) {
          dots[i].classList.remove('active');
          items[i].classList.remove('visible');}
    
       this.classList.add('active');
       items[1].classList.add('visible');
     
     });
 
      dots[2].addEventListener('click', function() {
        for(var i = 0; i<=dots.length; i++) {
          dots[i].classList.remove('active');
          items[i].classList.remove('visible');}
    
        this.classList.add('active');
        items[2].classList.add('visible');
     
     });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 }); // to musi być! odwołuje się do samego początku!