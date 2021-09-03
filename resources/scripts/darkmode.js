// darkmode => a11y mode
let checkbox = document.getElementById('darkmodeBox');
let label = document.getElementById('darkmode');
let logo = document.getElementById('logo');
let a11yables = document.getElementsByClassName('a11yable');
let icons = document.getElementsByClassName('icon');
let spans = document.getElementsByTagName('span');
let v8y = document.getElementById('vis');

if (!localStorage.getItem('a11y')) {
     logo.classList.add('invert');
}
if(localStorage.getItem('a11y')) {
     document.body.classList.add('a11y');
     label.classList.add('checked');

     v8y.src = "./resources/images/baseline_visibility_off_white_18dp.png";

     for(let item of a11yables){
          item.classList.add('a11y');
     };
     for(let item of icons){
          item.classList.remove('invert');
     };
     for(let item of spans){
          item.classList.add('a11y');
     };
};

window.onload = switchDarkmode();

function switchDarkmode(){
     checkbox.addEventListener( 'change', function() {
          localStorage.setItem('a11y',this.checked);
          if(this.checked) {
               document.body.classList.add('a11y');
               label.classList.add('checked');
               logo.classList.remove('invert');

               v8y.src = "./resources/images/baseline_visibility_off_white_18dp.png";

               for(let item of a11yables){
                    item.classList.add('a11y');
               };
               for(let item of icons){
                    item.classList.remove('invert');
               };
               for(let item of spans){
                    item.classList.add('a11y');
               };
          } else {
               document.body.classList.remove('a11y');
               label.classList.remove('checked');
               localStorage.removeItem('a11y');
               logo.classList.add('invert');

               v8y.src = "./resources/images/baseline_visibility_white_18dp.png";

               for(let item of a11yables){
                    item.classList.remove('a11y');
               };
               for(let item of icons){
                    item.classList.add('invert');
               };
               for(let item of spans){
                    item.classList.remove('a11y');
               };
          };
     });
};
