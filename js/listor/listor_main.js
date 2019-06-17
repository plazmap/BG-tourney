let casterlist = document.querySelector(".caster-list");

let casterbutton = document.querySelector(".caster-button");

casterbutton.addEventListener("click", function(e){
    updateListOfCasters();
});

function updateListOfCasters(){
  deleteChildren(casterlist);
  firebase.database().ref("casters/").once("value").then(function(snapshot){
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
  firebase.database().ref("casters/"+name).once("value").then(function(snapshot){
    Object.keys(currentchar.decisions).forEach(decision =>{
      currentchar.decisions[decision] = null;
      currentchar.decisions.firstspells =[];
    });
    currentchar.decisions.name = snapshot.val().name;
    currentchar.decisions.faction = snapshot.val().faction;
    currentchar.decisions.archetype = snapshot.val().archetype;
    currentchar.decisions.firstcapacity = snapshot.val().firstcapacity;
    currentchar.decisions.firstspells = snapshot.val().firstspells;
    currentchar.decisions.pts25first = snapshot.val().pts25first;
    currentchar.decisions.pts25second = snapshot.val().pts25second;
    currentchar.decisions.firststat = snapshot.val().firststat;
    currentchar.decisions.pts50first = snapshot.val().pts50first;
    currentchar.decisions.pts50second = snapshot.val().pts50second;
    currentchar.decisions.secondstat = snapshot.val().secondstat;
    currentchar.decisions.pts75first = snapshot.val().pts75first;
    currentchar.decisions.pts75second = snapshot.val().pts75second;
    currentchar.decisions.thirdstat = snapshot.val().thirdstat;

    currentchar.cardUpdate();
    descriptorUpdate();
    selectorUpdate();
  });
}


