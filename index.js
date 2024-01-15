const navbarEl = document.querySelector('.navbar');
console.log(navbarEl.offsetHeight);
const bottomcontainerEl = document.querySelector(".bottom-container")
const logoEl = document.getElementById('logosvg')


window.addEventListener("scroll", () => {
    if(window.scrollY > bottomcontainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
    }
        else{
            navbarEl.classList.remove("active")            
        }
})