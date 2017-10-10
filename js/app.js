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
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 }); // to musi być! odwołuje się do samego początku!