let darkModeButton = getElementById("darkmode")

darkModeButton.addEventListener( 'change', function() {
         localStorage.setItem('dark',this.checked);
         if(this.checked) {
              body.classList.add('dark');
         } else {
              body.classList.remove('dark');     
         }
    };

if(localStorage.getItem('dark')) {
         body.classList.add('dark');
    };
