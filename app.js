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

navLinksHash.forEach((link) => {
    if(link.href.includes(`${activePage}`) && activePage !== ""){
        link.classList.add("active")
        
    }else if(activePage === ""){
        navLinksHash[0].classList.add("active")
    }
    link.addEventListener("click", function(){
        navLinksHash.forEach(li => li.classList.remove("active"))
        this.classList.add("active")
        // navLinks.classList.remove("active")
    })
    
})



window.onscroll = function() {
    if(window.scrollY > 50){
        navBar.classList.add("active")
    }else if (window.scrollY < 50){
        navBar.classList.remove("active")
    }

    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if(pageYOffset >= clien) {
            current = section.getAttribute("id")
            // console.log(pageYOffset)
        }
    })

    // console.log(current)
    navLinksHash.forEach(li => {
        li.classList.remove("active")
        if(li.classList.contains(current)){
            li.classList.add("active")
        }else if(current === "record-section"){
            aboutSection.classList.add("active")
        }
        // console.log(li)
    })


}

burgerContainer.addEventListener("click", () => {
    navLinks.classList.add("active")
})

closeNav.addEventListener("click", () => {
    navLinks.classList.remove("active")
})

signUpLink.addEventListener("click", () => {
    login.classList.remove("active");
    signUp.classList.add("active")
})
loginLink.addEventListener("click", () => {
    login.classList.add("active");
    signUp.classList.remove("active")
})

showPassword.addEventListener("click", () => {
  password.type = "text"
  showPassword.classList.remove("active")
  hidePassword.classList.add("active")
})

hidePassword.addEventListener("click", () => {
  password.type = "password"

  showPassword.classList.add("active")
  hidePassword.classList.remove("active")
})
