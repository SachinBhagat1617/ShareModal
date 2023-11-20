const button=document.querySelector("#button1");
const modal=document.querySelector(".Modal");
const overlay=document.querySelector(".overlay");

//   Modal open function
const openModal=()=>{
    console.log("Modal Opened");
    
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
};
// button.addEventListener("click",()=>{
//     console.log("Modal Opened");
    
//     modal.classList.add("active");
//     overlay.classList.add("overlayActive");
// });
// Modal close function
const closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
};