// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// add event listener
navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})






// Fade in

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0,
    
  };


const appearOnScroll = new IntersectionObserver(function(entires, appearOnScroll) {
    entires.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
            }else{
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry,target);
            }          
        });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});






