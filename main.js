const answers = document.querySelectorAll(".card__info__content-answer");
const arrows = document.querySelectorAll(".arrow");


arrows.forEach(element => {
    element.addEventListener("click",showQuestion);
})



function showQuestion(element){

    if(element.target.parentNode.nextSibling.nextSibling.style.display === "none"){

        element.target.parentNode.style.fontWeight = "bold";
        element.target.style.animationName =  "rotateOpen";
        element.target.parentNode.nextSibling.nextSibling.style.display = "block";

    }else{

        element.target.parentNode.style.fontWeight = "normal";
        element.target.style.animationName =  "rotateClose";
        element.target.parentNode.nextSibling.nextSibling.style.display = "none";
        
    }
}
