function openNav() {
    
    document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
    
    document.getElementById("myNav").style.width = "0%";
}



const createOdometer = (el, value) => {

    const odometer = new Odometer({

        el: el,
        value: 0,
    });

    odometer.update(value);
};

const subscribersOdometer = document.querySelector(".subscriber-odometer");
createOdometer(subscribersOdometer, 15);


const videosodometer = document.querySelector(".videos-odometer");
createOdometer(videosodometer, 5000);



const projectsodometer = document.querySelector(".projects-odometer");
createOdometer(projectsodometer, 87);








let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");


scrollContainer.addEventListener("wheel", (evt) =>{

    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

    
});


nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});



backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});





const scrollTotop = document.querySelector('.scrollTop');
scrollTotop.addEventListener("click",smoothScroll);
function smoothScroll(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
