const answers = document.querySelectorAll(".card__info__content-answer");
const arrows = document.querySelectorAll(".arrow");


arrows.forEach(element => {
    element.addEventListener("click",showQuestion);
})
answers.forEach(element => {
    element.style.display="none";
 
})

function showQuestion(element){

    if(element.target.parentNode.nextSibling.nextSibling.style.display == "none"){

       

        element.target.parentNode.style.fontWeight = "bold";
        element.target.classList.add("rotateOpen");
        element.target.classList.remove("rotateClose");
        element.target.parentNode.nextSibling.nextSibling.style.display = "block";

    }else{

        element.target.parentNode.style.fontWeight = "normal";
        element.target.classList.remove("rotateOpen");
        element.target.classList.add("rotateClose");
        element.target.parentNode.nextSibling.nextSibling.style.display = "none";
        
    }
}
