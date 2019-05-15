//Create var to keep track of wich tab is selected.



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
    }else if(tab == 2 ){
        level0.style.display = "none";
        level1.style.display = "none";
        level2.style.display = "block";
    }
    tabselected = tab;
}

manageTab();

var tabs = document.querySelector(".level-tabs");
var levelbuttons = tabs.querySelectorAll("button");
levelbuttons.forEach(levelbutton => {
    levelbutton.addEventListener("click", function(e){
        manageTab(e.target.value);
    });
});
