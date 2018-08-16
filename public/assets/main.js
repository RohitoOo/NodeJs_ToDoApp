
// Vanilla JavaScript  VS  Jquery
//
// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.classList.add("close") ;
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
//
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
//
// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
//
// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//   document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
//
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
//
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }



// Jquery

$(document).ready( () => {

  $('#myForm').on('submit' , function(e) {
    var item = $('form input');
    var todo = {item : item.val()};

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function(datas){
        console.log(datas)
        location.reload()
      }
    })
  })


  $('li').on('click' , function() {

    var item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function(datas){
        location.reload();
      }
    })
  })

})
