const body = document.querySelector("body")
const navBar = document.querySelector(".navbar")
const burgerContainer = document.querySelector(".burger-container")
const navLinks = document.querySelector(".navlinks")
const closeNav = document.querySelector(".close-nav")
const signUpLink = document.querySelector(".sign-up-link")
const loginLink = document.querySelector(".login-link")
const signUp = document.querySelector(".sign-up")
const login = document.querySelector(".login")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const showPassword = document.querySelector(".show-password")
const hidePassword = document.querySelector(".hide-password")
const activePage = window.location.hash
const navLinksHash = document.querySelectorAll(".navlinks a")
const sections = document.querySelectorAll("section")
const aboutSection = document.querySelector(".about-section")

console.log(activePage)

// Select Navigation link when the page is onLoad and When it is  Clicked
navLinksHash.forEach((link) => {
    if(link.href.includes(`${activePage}`) && activePage !== ""){
        link.classList.add("active")
        
    }else if(activePage === ""){
        navLinksHash[0].classList.add("active")
    }
    link.addEventListener("click", function(){
        navLinksHash.forEach(li => li.classList.remove("active"))
        this.classList.add("active")
        navLinks.classList.remove("active")
    })
    
})




// Change Navbar Color when scrolled and select navigation link when scrolled
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navBar.classList.add("active")
    }else if (window.scrollY < 50){
        navBar.classList.remove("active")
    }

    sections.forEach((section) => {
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinksHash.forEach(links => {
                links.classList.remove("active");
                document.querySelector("nav ul a[href*=" + id + "]").classList.add("active")
            })
        }
    })


})

// Open Navbar
burgerContainer.addEventListener("click", () => {
    navLinks.classList.add("active")
})

// Close Navbar
closeNav.addEventListener("click", () => {
    navLinks.classList.remove("active")
})

//Change the form to Sign up form
signUpLink.addEventListener("click", () => {
    login.classList.remove("active");
    signUp.classList.add("active")
})

// Change the form to login form
loginLink.addEventListener("click", () => {
    login.classList.add("active");
    signUp.classList.remove("active")
})

// show password function
showPassword.addEventListener("click", () => {
  password.type = "text"
  showPassword.classList.remove("active")
  hidePassword.classList.add("active")
})

// Hide password function
hidePassword.addEventListener("click", () => {
  password.type = "password"

  showPassword.classList.add("active")
  hidePassword.classList.remove("active")
})
