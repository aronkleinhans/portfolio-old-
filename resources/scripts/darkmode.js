// darkmode
let checkbox = document.getElementById('darkmodeBox');
let label = document.getElementById('darkmode');
let items = document.getElementsByClassName('item');
let button = document.getElementById('darkmode');
let logo = document.getElementById('logo');


if(localStorage.getItem('dark')) {
     document.body.classList.add('dark');
     label.classList.add('checked');
     button.classList.add('dShadow');
     logo.classList.add('invert');
};

window.onload = switchDarkmode();

function switchDarkmode(){
     checkbox.addEventListener( 'change', function() {
          localStorage.setItem('dark',this.checked);
          if(this.checked) {
               document.body.classList.add('dark');
               label.classList.add('checked');
               button.classList.add('dShadow');
               logo.classList.add('invert');
          } else {
               document.body.classList.remove('dark');
               label.classList.remove('checked');
               localStorage.removeItem('dark');
               button.classList.remove('dShadow');
               logo.classList.remove('invert');
          };
     });
};
