const name = document.querySelector("#name");
const email = document.querySelector("#email");
const num = document.querySelector("#num");
const textarea = document.querySelector("#text-area");
const button = document.querySelector("#btn");
const error = document.querySelector("#error");

button.addEventListener("click", function(event) {
    event.preventDefault();
    checkEmptyField(name )
    checkEmptyField(num )
    checkEmptyField(email )
 


})

function checkEmptyField(field){
    if(field.value == ""){
        error.style.display = "block";
        // name.classList.add("border-2", "border-red-500")
    }
    else{
        error.style.display = "none";
        // name.classList.remove("border-2", "border-red-500")
        // email.classList.remove("border-2", "border-red-500")
        // num.classList.remove("border-2", "border-red-500")

    }
}
