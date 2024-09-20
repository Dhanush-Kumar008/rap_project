//for side navbar
var inp3=document.querySelector("#sidenavbar")
function navfunc(){
    inp3.style.left="0"


}

function closenavbar(event){
    event.preventDefault()
    inp3.style.left= "-40%"
}

//for ticket booking 
var overlayvar=document.querySelector("#overlay")
var popdivvar=document.querySelector("#popdiv")
function popupfunction(){
    overlayvar.style.display="block"
    popdivvar.style.display="block"
}

//close the popup
 

var firstvar=document.querySelector("#firstname")
var lastvar=document.querySelector("#lastname")
var addressvar=document.querySelector("#Address")
var phnovar=document.querySelector("#phno")
var emailvar=document.querySelector("#email")
var ticketvar=document.querySelector("#not")
var txtarea=document.querySelector("#commend")
function popupclose(){
    
    overlayvar.style.display="none"
    popdivvar.style.display="none"

    firstvar.value=""
    lastvar.value=""
    addressvar.value=""
    phnovar.value=""
    emailvar.value=""
    ticketvar.value=""
    txtarea.value=""
}

//submit button process

function submitfunction(){
    // Retrieve values from form
    var value1 = document.querySelector("#firstname").value;
    var value2 = document.querySelector("#lastname").value;
    var value3 = document.querySelector("#Address").value;
    var value4 = document.querySelector("#phno").value;
    var value5 = document.querySelector("#email").value;
    var value6 = document.querySelector("#not").value;
    var value7 = document.querySelector("#commend").value;

    // Check if all fields are filled
    if (!value1 || !value2 || !value3 || !value4 || !value5 || !value6 || !value7) {
        alert("Fill all the details");
        return;
    }

    // Initialize counters for special characters in address
    var hypenvar = 0;
    var colonvar = 0;
    var semivar = 0;

    // Loop through the address to count occurrences of special characters
    for (var count = 0; count < value3.length; count++) {
        if (value3[count] === ";") {
            semivar++;
        }
        if (value3[count] === ":") {
            colonvar++;
        }
        if (value3[count] === "-") {
            hypenvar++;
        }
    }
    //check whether the address have atmost one :,;,-
    if (colonvar != 1 || hypenvar != 1 || semivar != 1) {
        alert("Address must contain exactly one ':', one ';', and one '-'");
        return;
    }
    

    // Check if phone number has exactly 10 digits
    if (value4.length !== 10 || isNaN(value4)) {
        alert("Phone number must be 10 digits");
        return;
    }

    // If everything is correct, hide the overlay and reset form fields
    overlayvar.style.display = "none";
    popdivvar.style.display = "none";

    // Reset form fields
    firstvar.value=""
    lastvar.value=""
    addressvar.value=""
    phnovar.value=""
    emailvar.value=""
    ticketvar.value=""
    txtarea.value=""
}











