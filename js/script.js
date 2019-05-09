/* INITIALIZE DISPLAY 
My website/app currently has no backend.  
Until one is added, my current budget amount is hardcoded at $1500.
Each time the page refreshes, this initializes the display with the hardcoded amount.
*/
var display = document.getElementById('display'); // the display "area" which holds current budget value and real-time purchase amount input
var bdgt = display.dataset.budget // hard coded data-attribute of $1500 and used to update display once purchase amount has been entered
display.innerHTML = bdgt;


/* MISC VARIABLES */
var num_btns = document.querySelectorAll(".num_btn");  // nodelist of number pad buttons
var pamount = ""; // purchase amount which is displayed in response to number pad clicks


/* FUNCTIONS */

// this is to show the dollar amount input in the display area in real time
function spent() {
    if(display.innerHTML == bdgt) { // if number displayed is my remaining budget i need to clear before entering purchase amount
        display.innerHTML = "";
        pamount = this.dataset.num_btn;
    } else {// if number displayed is not my remaining budget, it means i'm currently typing, so i continue to add numbers to my display without clearing
        pamount += this.dataset.num_btn;
    }     
    display.innerHTML = pamount;
}

function clear() { // returns display screen to my remaining budget amount
    display.innerHTML = bdgt;
}

function budget_update() { // subtracts purchase amount from budget and updates data attribute
    bdgt -= pamount;
    display.setAttribute('data-budget', bdgt);
    display.innerHTML = bdgt;
}


/* BUTTON CLICKS */

// the loop is simply to avoid adding an onclick for each number button individually
for (var i = 0, l = num_btns.length; i < l; i++) {
    num_btns[i].onclick = spent ;
}

document.getElementById('clr_btn').onclick = clear; // C (clear) button in number pad
document.getElementById('sqr_btn').onclick = budget_update; // SQUANDER button in number pad

