
    // Toggle mobile menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.menu');

    mobileMenuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
    // 

    const display = document.getElementById('display')
    const calbutton = document.getElementById('calculator-button')
    const calpopup = document.getElementById("calculator-popup")

    calbutton.addEventListener("click", () => {
      calpopup.classList.toggle('active')
    })

    function addisplay(e) {
      console.log(e.value)
      display.value += e.value
    }



    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    }

   

    function toggleList(listId) {
        const ul = document.getElementById(listId);
        ul.style.display = ul.style.display === "none" ? "block" : "none";
    }






  