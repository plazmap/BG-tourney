//Create var to keep track of wich tab is selected.

var navselected = 0;

function manageNav(nav){
    
creatornav = document.querySelector(".creator-nav");
listornav = document.querySelector(".listor-nav");
accountnav = document.querySelector(".account-nav");
stuffnav = document.querySelector(".stuff-nav");

nav1 = document.querySelector(".nav-1");
nav2 = document.querySelector(".nav-2");
nav3 = document.querySelector(".nav-3");
nav4 = document.querySelector(".nav-4");

    if (nav==1){
        creatornav.style.display = "flex";
        listornav.style.display = "none";
        accountnav.style.display = "none";
        stuffnav.style.display = "none";

        nav1.classList.add("active");
        nav2.classList.remove("active");
        nav3.classList.remove("active");
        nav4.classList.remove("active");

    }
    if (nav==2){
        creatornav.style.display = "none";
        listornav.style.display = "flex";
        accountnav.style.display = "none";
        stuffnav.style.display = "none";

        nav1.classList.remove("active");
        nav2.classList.add("active");
        nav3.classList.remove("active");
        nav4.classList.remove("active");
    }

    if (nav==3){
        creatornav.style.display = "none";
        listornav.style.display = "none";
        accountnav.style.display = "flex";
        stuffnav.style.display = "none";

        nav1.classList.remove("active");
        nav2.classList.remove("active");
        nav3.classList.add("active");
        nav4.classList.remove("active");
    }

    if (nav==4){
        creatornav.style.display = "none";
        listornav.style.display = "none";
        accountnav.style.display = "none";
        stuffnav.style.display = "flex";

        nav1.classList.remove("active");
        nav2.classList.remove("active");
        nav3.classList.remove("active");
        nav4.classList.add("active");
    }
    

    navselected = nav;

}
//    if (nav == 0 ){
//         level0.style.display = "block";
//         level1.style.display = "none";
//         level2.style.display = "none";
//     }else if(nav == 1 ){
//         level0.style.display = "none";
//         level1.style.display = "block";
//         level2.style.display = "none";
//         var level1error = document.querySelector(".level-1-error");
//         var level1selectors = document.querySelector(".level-1-selectors");
//         if (currentchar.card.level ==0){
//             level1error.style.display = "block";
//             level1selectors.style.display = "none";

//         }else{
//             level1error.style.display = "none";
//             level1selectors.style.display = "block";
//         }
//     }else if(nav == 2 ){
//         level0.style.display = "none";
//         level1.style.display = "none";
//         level2.style.display = "block";
//         var level2error = document.querySelector(".level-2-error");
//         var level2selectors = document.querySelector(".level-2-selectors");
//         if (currentchar.card.level ==0){
//             level2error.style.display = "block";
//             level2selectors.style.display = "none";
//         }else{
//             level2error.style.display = "none";
//             level2selectors.style.display = "block";
//         }
//     }

//     tabselected = tab;
// }

var navs = document.querySelector(".navbar-nav");
var navbuttons = navs.querySelectorAll(".nav-link");
navbuttons.forEach(navbutton => {
    navbutton.addEventListener("click", function(e){
        manageNav(e.target.dataset.nav);
    });
});
