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
     
     var items = document.querySelectorAll('.slider li');
     var dots = document.querySelectorAll('.dot');
     var dot1 = document.getElementById('dot1');
     var dot2 = document.getElementById('dot2');
     var dot3 = document.getElementById('dot3');

     
    dot1.addEventListener('click', function() {
      for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('visible');
      dots[i].classList.remove('active');
    };
    this.classList.add('active');
    items[0].classList.add('visible');
  });

  dot2.addEventListener('click', function() {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('visible');
      dots[i].classList.remove('active');
    };
    this.classList.add('active');
    items[1].classList.add('visible');
  });

  dot3.addEventListener('click', function() {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('visible');
      dots[i].classList.remove('active');
    };
    this.classList.add('active');
    items[2].classList.add('visible');
  });
     
     // zadanie 6
     //dodawnie zadania do listy
     
  var addTaskBtn = document.querySelector('.add-task-btn');
  var tasksList = document.querySelector('.list');
  var input = document.querySelector('input');
 
  function addTask() {
    var newTask = document.createElement('li');
    newTask.innerHTML = input.value;
    tasksList.appendChild(newTask);
    input.value = '';
  }

  // przycisk Delete
     
  function addTaskWithDelBtn() {
    var newTask = document.createElement('li');
    var taskValue = document.createElement('div');
    var deleteBtn = document.createElement('button');

    taskValue.innerHTML = input.value;
    deleteBtn.innerHTML = 'Usuń';
    deleteBtn.classList.add('delete-btn', 'btn');
    tasksList.appendChild(newTask);
    newTask.appendChild(taskValue);
    newTask.appendChild(deleteBtn);
    input.value = '';

    deleteBtn.addEventListener('click', function() {
      this.parentElement.parentNode.removeChild(this.parentElement);
    });
  }

  // przycisk Gotowe
     
  function addTaskWithDoneBtn() {
    var newTask = document.createElement('li');
    var taskValue = document.createElement('div');
    var doneBtn = document.createElement('button');

    taskValue.innerHTML = input.value;
    doneBtn.innerHTML = 'Gotowe!'
    doneBtn.classList.add('done-btn', 'btn');
    tasksList.appendChild(newTask);
    newTask.appendChild(taskValue);
    newTask.appendChild(doneBtn);
    input.value = '';

    doneBtn.addEventListener('click', function() {
      this.previousElementSibling.style.textDecoration = 'line-through';
    })    
  }
 
       addTaskBtn.addEventListener('click', addTask);
 }); // to musi być! odwołuje się do samego początku!