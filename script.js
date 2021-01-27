
let timeElmt = document.querySelectorAll('time');

for (var i =0 ; i < timeElmt.length; i++) {
  timeElmt[i].addEventListener('click', toggleTime);
}
// console.log(timeElmt);

// function to popup on mobile view the content for each dates
function toggleTime(event) {

  if (event.target && event.target.className == 'popup clickable-time') {
    // console.log('jai cliqué');
    var next = event.target.nextElementSibling;
  
      if (next.style.visibility == "")  {
          next.style.visibility = "visible";
      } else {
          next.style.visibility == "visible";
          next.style.visibility = '';
      }
      // console.log(next);
  }

let spanClose = document.getElementsByClassName('close');

    for (var i =0 ; i < spanClose.length; i++) {
      spanClose[i].addEventListener('click', closePopup);
    }
// close-up cross for popup
function closePopup() {

  if (next.style.visibility == 'visible') {
    next.style.visibility = "";
  } else {
    next.style.visibility = "";
  }
  console.log(next.style.visibility);
  } 
}




