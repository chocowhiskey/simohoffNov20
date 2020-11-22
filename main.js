console.log('Hello from main.js!')

// get li tag for work
const work = document.getElementById("work")


console.log(work);
var onButtonClick = function() {
    console.log('henlo');
};
// 3. Add the event listener for the element and function
work.addEventListener("click", onButtonClick);
