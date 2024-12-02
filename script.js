document.addEventListener('scroll', function onScroll(){
    const imageElement = document.getElementById('imageAbout');
    const position = imageElement.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >  0 ){
        imageElement.classList.add('visible');

     document.removeEventListener('scroll', onScroll)

    }
})


function toggleOverlay(element){
    element.classList.toggle('active');
}

window.addEventListener("DOMContentLoaded", () => {
    const navHome = document.getElementById("nav-home");
    const navAbout = document.getElementById("nav-about");
    const navSkill = document.getElementById("nav-skill");
    const navService = document.getElementById("nav-service");
    const navProject = document.getElementById("nav-project");
    const navContact = document.getElementById("nav-contact");
  
    const scrollToSection = (selector) => {
      document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
    };
  
    navHome.addEventListener("click", () => scrollToSection(".section-one"));
    navAbout.addEventListener("click", () => scrollToSection(".section-two"));
    navService.addEventListener("click", () => scrollToSection(".section-three")); 
    navSkill.addEventListener("click", () => scrollToSection(".section-four")); 
    navProject.addEventListener("click", () => scrollToSection(".section-five"));
    navContact.addEventListener("click", () => scrollToSection(".section-six"));
  });

  document.querySelector(".btn-about").addEventListener("click", () => {
    document.querySelector(".section-two").scrollIntoView({behavior: "smooth"});
  });
  