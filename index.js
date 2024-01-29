var typed= new Typed('.text',{
    strings:['Web Developer','Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});
document.getElementById("home-btn").addEventListener("click", function() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
