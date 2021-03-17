// darkmode
let checkbox = document.getElementById('darkmodeBox');
let label = document.getElementById('darkmode');
let items = document.getElementsByClassName('item');

if(localStorage.getItem('dark')) {
     document.body.classList.add('dark');
     label.classList.add('checked');
};

window.onload = switchDarkmode();

function switchDarkmode(){
     checkbox.addEventListener( 'change', function() {
          localStorage.setItem('dark',this.checked);
          if(this.checked) {
               document.body.classList.add('dark');
               label.classList.add('checked');
               for (let i = 0; i < items.length; i++) {
                    items[i].classList.add('darkitem');
               }
          } else {
               document.body.classList.remove('dark');
               label.classList.remove('checked');
               for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('darkitem');
               }
               localStorage.removeItem('dark');
          };
     });
};
