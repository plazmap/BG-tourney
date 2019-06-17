let casterlist = document.querySelector(".caster-list");


function updateListOfCasters(){
  deleteChildren(casterlist);
  firebase.database().ref("/casters").once("value").then(function(snapshot){
    snapshot.forEach(caster => {
      var wrapper = document.createElement("div");
      wrapper.classList.add("caster-display");
    
      var name = document.createElement("p");
      var archetype = document.createElement("p");
      var faction = document.createElement("p");
      var button = document.createElement("button");
      var down =document.createElement("i");
     
      name.innerHTML = caster.val().name;
      faction.innerHTML = caster.val().faction;
      archetype.innerHTML = caster.val().archetype;
      button.innerHTML= "retrieve";

      name.classList.add("caster-sub-display")
      faction.classList.add("caster-sub-display")
      archetype.classList.add("caster-sub-display")
      button.classList.add("btn");
      button.classList.add("btn-warning");
      button.classList.add("rounded-circle");
      button.value = caster.val().name;
      down.classList.add("far");
      down.classList.add("fa-arrow-alt-circle-down");
      down.style.fontSize = "24px";

      wrapper.appendChild(name);
      wrapper.appendChild(faction);
      wrapper.appendChild(archetype);
      wrapper.appendChild(button);
      wrapper.appendChild(down);
    
      casterlist.appendChild(wrapper);

      button.addEventListener("click", function(e) {
        changeCaster(e.target.value);
      });
    });
  });
}

function changeCaster(name){
  firebase.database().ref("/casters").once("value").then(function(snapshot){

}



let casterbutton = document.querySelector(".caster-button");


casterbutton.addEventListener("click", function(e){
    updateListOfCasters();
});
