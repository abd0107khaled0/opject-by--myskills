// check if there color option

let maincolor = localStorage.getItem("color-option");

if (maincolor !== null ){

    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));

    //check for active class colors list items
    document.querySelectorAll(".colors-list li").forEach(el => {
        el.classList.remove("active")

         // add active class on element with data-color

    if(el.dataset.color === maincolor){
        //add active class
        el.classList.add("active");
    }

    });   
}

// Toggle Spain Class on Icon 

document.querySelector(".toggle-settings .fa-cog").onclick = function () {
  
    let opened = document.querySelector('.settings-box');

    //Toggle class fa-spin
    this.classList.toggle("fa-spin");

    //Toggle class open
    opened.classList.toggle("open");
};

//swith color 

const colorsli = document.querySelectorAll(".colors-list li");

//loop 
colorsli.forEach(li => {
    
    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        localStorage.setItem("color-option", e.target.dataset.color);

        //remove active childrens 
        e.target.parentElement.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active")
        });
        e.target.classList.add("active")
    });
});
//swith background-option

const randomBackgrounds = document.querySelectorAll(".random-backgrounds span");

//loop on all span
randomBackgrounds.forEach(span => {
    
    span.addEventListener("click", (e) => {

        //remove active childrens 
        e.target.parentElement.querySelectorAll(".active").forEach(el => {
            el.classList.remove("active")
        });
        e.target.classList.add("active")

        if (e.target.dataset.background === 'yes'){

            backgroundoption = true ;
            randomizeimage()
    
        }else{
            backgroundoption = false ;
            clearInterval(backgroundinterval);
        }
    });
});


// select landing 
let landing = document.querySelector('.landing-page')

// get array 
let imgArray = ['prg.jpg', 'ph7.jpg', 'photo1.jpg', 'pr.jpg'];

// start random 

let backgroundoption = true ;

// variable to controls

let backgroundinterval;

//function to randoms 
 
function randomizeimage(){

    if(backgroundoption == true){
        backgroundinterval = setInterval( () => {

            let startRandom = Math.floor(Math.random() * imgArray.length);
            
            //change imge 
            
            landing.style.backgroundImage ='url("img/' + imgArray[startRandom] +'")'
            
            },1000)
    }
}

//select skills selector 
let ourskills = document.querySelector(".skills");

window.onscroll = function () {

// skills offset top
let skillsoffsettop = ourskills.offsetTop;

//skills ouyer height 
let skillsouterheight = ourskills.offsetHeight;

//window height 
let windowheight = this.innerHeight;

//wondow scroll top
let windowscrolltop = this.pageYOffset;

if(windowscrolltop > (skillsoffsettop + skillsouterheight - windowheight)) {


let skills = document.querySelectorAll(".skills-box .skills-progress span");

skills.forEach(skill => {

    skill.style.width = skill.dataset.progress
});

};
}

// creat pouper with the image

let gallery = document.querySelectorAll(".gallery img");

gallery.forEach(img => {
  
img.addEventListener("click", (e) => {

    //creat element 
    let overlay = document.createElement("div");

    overlay.className="popup-overlay";

    document.body.appendChild(overlay);

    //creat popup box
    let popupbox = document.createElement("div");

    popupbox.className="popup-box";

     // creat heading in the popup
    if(img.alt !== null){

        let imagehe = document.createElement("h3");

        let imgtext = document.createTextNode(img.alt);

        imagehe.appendChild(imgtext);

        imagehe.style.textAlign = 'center';

        popupbox.appendChild(imagehe);
    }

    let popupimage = document.createElement("img");

    popupimage.src = img.src ;

    popupbox.appendChild(popupimage);

    document.body.appendChild(popupbox);

   //creat x inthe popup
    let spopup = document.createElement("span")

   let xpopup = document.createTextNode("x");

   spopup.appendChild(xpopup);

   spopup.className = 'close-button';

   popupbox.appendChild(spopup)

});
  
});

// close button
document.addEventListener("click",function(e){

    if(e.target.className == 'close-button'){

        //remove the current popup
        e.target.parentNode.remove()

        //close popup box
        document.querySelector(".popup-overlay").remove();
    }
})

// select all bullets
// const allbullets = document.querySelectorAll(".nav-bullets .bullet2");

// allbullets.forEach(bullet => {

//     bullet.addEventListener("click", (e)=>{

//         document.querySelectorAll(".about-us").scrollIntoView({
           
//             behavior: 'smooth'
//         });
//     });
// });

// start scroll 

$(".nav-bullets .bullet1").click(function(){

    $('html, body').animate({
            
        scrollTop: $('.about-us').offset().top
    }, 1000);
})
$(".nav-bullets .bullet2").click(function(){

    $('html, body').animate({
            
        scrollTop: $('.skills').offset().top
    }, 1000);
})
$(".nav-bullets .bullet3").click(function(){

    $('html, body').animate({
            
        scrollTop: $('.gallery').offset().top
    }, 1000);
})
$(".nav-bullets .bullet4").click(function(e){

    $('html, body').animate({
            
        scrollTop: $(e.target.dataset.section).offset().top
    }, 1000);
})
$(".nav-bullets .bullet5").click(function(e){

    $('html, body').animate({
            
        scrollTop: $(e.target.dataset.section).offset().top
    }, 1000);
})
$(".nav-bullets .bullet6").click(function(e){

    $('html, body').animate({
            
        scrollTop: $(e.target.dataset.section).offset().top
    }, 1000);
})
// end scroll 

// start scroll top 
$(".scroll").click(function(e){

    $('html, body').animate({
            
        scrollTop: $(e.target.dataset.opp).offset

    }, 2000);
    
})
// add , remove display 

$('.testing-option .yes').click(function(){
    
   $('.nav-bullets').show(1000)
  
})
$('.testing-option .no').click(function(){
    
   $('.nav-bullets').hide(1000)
  
})

//reset Button
document.querySelector(".reset-options").onclick = function(){

    localStorage.clear();
    // localStorage.clear("bullets-option");
    // localStorage.clear("color-option");
    // localStorage.clear("background-option");
    window.location.reload(100000000)
};

                                                // let bulletspan = document.querySelectorAll('.testing-option span');

                                                // let bulletcounter = document.querySelectorAll('.nav-bullets');

                                                // bulletspan.forEach(span => {
                                                    
                                                //     span.addEventListener('click', (e)=> {

                                                //         if( span.dataset.diaplay === 'yes' ){

                                                //             bulletcounter.style.display = 'block';

                                                //         }else {
                                                //             bulletcounter.style.display = 'none'  ;  
                                                //         }
                                                //     })
                                                // })


                                                // // creat popup bpx

                                                // let popupbox = document.querySelectorAll(".gallery img");

                                                // popupbox.forEach(img => {

                                                //     img.addEventListener("click", (e) => {
                                                //         let box = document.createElement("div");

                                                //         box.className="overlay";

                                                //         document.body.appendChild(box);

                                                //         let creatbox = document.createElement('div');

                                                //         creatbox.className="imgbox";

                                                //         let hatimg = document.createElement("img");

                                                //         hatimg.src = img.src ;
                                                //         creatbox.appendChild(hatimg)

                                                //         document.body.appendChild(creatbox)
                                                        


                                                //     })
                                                // })

