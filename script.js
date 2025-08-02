const button = document.getElementById("btn");
const buttonSecond = document.getElementById("second");
button.addEventListener("click",()=>{
    alert("Cart Feature")
})
buttonSecond.addEventListener("click",()=>{
    alert("Coupan Code ")
})
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
