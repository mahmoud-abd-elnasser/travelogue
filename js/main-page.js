'use strict'
let menu = document.getElementById('menu');
let canvas = document.getElementById('offcanvasScrolling');

function toggleMenuVisibility() {
    if (canvas.classList.contains('show')) {
        menu.classList.add('d-none');
    } else {
        menu.classList.remove('d-none');
    }
}
canvas.addEventListener('shown.bs.offcanvas', toggleMenuVisibility);
canvas.addEventListener('hidden.bs.offcanvas', toggleMenuVisibility);

const divs = document.querySelectorAll('.d');

divs.forEach(div => {
  div.addEventListener('click', function() {

    window.location.href = 'https://mahmoud-abd-elnasser.github.io/travelogue/page.html';
  });
});






