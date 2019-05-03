var selectors = document.querySelector(".constructor").querySelectorAll(".selector");
var helpdisplay = document.querySelector(".help-display");
selectors.forEach(selector => {
    selector.addEventListener("mouseover", function(e) {
        if (selector.classList.contains("faction-selector")){
          helpdisplay.innerHTML = "coin faction"; 
        }else if (selector.classList.contains("archetype-selector")){
          helpdisplay.innerHTML = "coin archetype";
        }else if(selector.classList.contains("capacity-selector")){
          helpdisplay.innerHTML = "coin capacity";
        }else if(selector.classList.contains("spell-selector")){
          helpdisplay.innerHTML = "coin spell";
        }
      });
});






