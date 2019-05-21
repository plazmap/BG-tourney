//Create var to keep track of wich tab is selected.

var tabselected = 0;

function manageTab(tab){
    
var level0 = document.querySelector(".level-0");
var level1 = document.querySelector(".level-1");
var level2 = document.querySelector(".level-2");

if (tab == 0 ){
        level0.style.display = "block";
        level1.style.display = "none";
        level2.style.display = "none";
    }else if(tab == 1 ){
        level0.style.display = "none";
        level1.style.display = "block";
        level2.style.display = "none";
        var level1error = document.querySelector(".level-1-error");
        var level1selectors = document.querySelector(".level-1-selectors");
        if (currentchar.level ==0){
            level1error.style.display = "block";
            level1selectors.style.display = "none";
        }else{
            level1error.style.display = "none";
            level1selectors.style.display = "block";
        }
    }else if(tab == 2 ){
        level0.style.display = "none";
        level1.style.display = "none";
        level2.style.display = "block";
        var level2error = document.querySelector(".level-2-error");
        var level2selectors = document.querySelector(".level-2-selectors");
        if (currentchar.level ==0){
            level2error.style.display = "block";
            level2selectors.style.display = "none";
        }else{
            level2error.style.display = "none";
            level2selectors.style.display = "block";
        }
    }

    tabselected = tab;
}

var tabs = document.querySelector(".level-tabs");
var levelbuttons = tabs.querySelectorAll("button");
levelbuttons.forEach(levelbutton => {
    levelbutton.addEventListener("click", function(e){
        manageTab(e.target.value);
    });
});
