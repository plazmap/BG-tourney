var selectors = document.querySelector(".constructor").querySelectorAll(".selector");
var helpdisplay = document.querySelector(".helpdisplay");
selectors.forEach(selector => {
    selector.addEventListener("mouseover", function(e) {
        if (selector.id == "factionselector"){
          helpdisplay.innerHTML = "coin faction";
        }else if (selector.id == "archetypeselector"){
          helpdisplay.innerHTML = "coin archetype";
        }else if(selector.id == "capacityselector"){
          helpdisplay.innerHTML = "coin capacity";
        }else if(selector.classList.contains("spell")){
          helpdisplay.innerHTML = "coin spell";
        }
      });
});






