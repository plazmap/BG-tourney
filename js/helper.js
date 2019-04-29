var selectors = document.querySelector(".constructor").querySelectorAll(".selector");
var helpdisplay = document.querySelector(".help-display");
selectors.forEach(selector => {
    selector.addEventListener("mouseover", function(e) {
        if (selector.id == "faction-selector"){
          helpdisplay.innerHTML = "coin faction"; 
        }else if (selector.id == "archetype-selector"){
          helpdisplay.innerHTML = "coin archetype";
        }else if(selector.id == "capacity-selector"){
          helpdisplay.innerHTML = "coin capacity";
        }else if(selector.classList.contains("spell")){
          helpdisplay.innerHTML = "coin spell";
        }
      });
});






