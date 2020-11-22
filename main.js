console.log('Hello from main.js!')

// get li tag for work
const work = document.getElementById("work")

var onButtonClick = function() {
    console.log('henlo');

    // hide home page and menu footer
    document.querySelector('.home.page.show').classList.remove("show")
    document.querySelector('.footer-menu.show').classList.remove("show") 
    
    // show work page
    document.querySelector('.work.page.hide').classList.remove("hide")
    document.querySelector('.work.page').classList.add("show")

    
};
// 3. Add the event listener for the element and function
work.addEventListener("click", onButtonClick);
