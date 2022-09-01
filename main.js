const answers = document.querySelectorAll(".card__info__content-answer");
const arrows = document.querySelectorAll(".arrow");

console.log(arrows);

arrows.forEach(element => {

    element.addEventListener("click",showQuestion);

})



function showQuestion(element){

    if(element.target.parentNode.nextSibling.nextSibling.style.display === "none"){
        element.target.parentNode.style.fontWeight = "bold";
        element.target.style.transform = "rotate(180deg)"
        element.target.parentNode.nextSibling.nextSibling.style.display = "block";

    }else{
        element.target.parentNode.style.fontWeight = "normal";
        element.target.style.transform = "rotate(0deg)"

        element.target.parentNode.nextSibling.nextSibling.style.display = "none";
    }
    

}
