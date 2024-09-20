//indexof js for artist content
var artistdiv=document.querySelector(".artistclass")
var artistimg=artistdiv.querySelectorAll("div") //arrary of div

function searchfunction(){
    var enteredvalue=document.querySelector("#inputid").value.toUpperCase()

    for(var count=0;count<artistimg.length;count=count+1){
        var paravalue=artistimg[count].querySelector("p").textContent.toUpperCase()
        if(paravalue.indexOf(enteredvalue)<0){
            artistimg[count].style.display="none"
            
        }

        else{
            artistimg[count].style.display="block"
        }
    }
}