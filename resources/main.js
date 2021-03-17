// darkmode
let checkbox = document.getElementById('darkmodeBox');
let label = document.getElementById('darkmode');

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
          } else {
               document.body.classList.remove('dark');
               label.classList.remove('checked');
               localStorage.removeItem('dark');
          };
     });
};
