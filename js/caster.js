  //Constructor for Casters.
function caster(name, faction, basetype) {
    this.name = name;
    this.faction = faction;
    this.basetype = basetype;
  }
  
var currentchar = new caster();

//Update Caster Object every time something is selected;

document.addEventListener("nameselected", function(e) {
    currentchar.name = e.detail.name;
});

document.addEventListener("factionselected", function(e) {  
    currentchar.faction = e.detail.faction;
    currentchar.basetype=undefined;
});

document.addEventListener("basetypeselected", function(e) {
    currentchar.basetype = e.detail.basetype;
});

//Delete "please select" options from selects after first use.

document.addEventListener("factionselected", function(e) {  
    var factionselector = document.querySelector("#factionselector");
        if (factionselector.firstElementChild.value == "error"){
            factionselector.removeChild(factionselector.firstElementChild);
    }
});

document.addEventListener("basetypeselected", function(e) {  
    var basetypeSelector = document.querySelector("#basetypeselector");
          if (basetypeSelector.firstElementChild.value == "error"){
            basetypeSelector.removeChild(basetypeSelector.firstElementChild);
    }
});

    
//update descriptor everytime something is selected.
var descriptorUpdate = function(){
    var descriptor = document.querySelector(".descriptor");
    if ((currentchar.name)&&(currentchar.faction)&&(currentchar.basetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.basetype+" "+currentchar.faction+" warcaster's name is "+currentchar.name;
    }else if ((currentchar.name)&&(currentchar.faction)&&(!currentchar.basetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster's name is "+currentchar.name;
    }else if ((!currentchar.name)&&(currentchar.faction)&&(currentchar.basetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.basetype+" "+currentchar.faction+" warcaster is nameless.";
    }else if ((!currentchar.name)&&(currentchar.faction)&&(!currentchar.basetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster is nameless.";
    }else if ((currentchar.name)&&(!currentchar.faction)&&(!currentchar.basetype)){
        descriptor.innerHTML = "Your mighty new warcaster's name is "+currentchar.name;
    }
}
document.addEventListener("nameselected", descriptorUpdate);
document.addEventListener("factionselected", descriptorUpdate);
document.addEventListener("basetypeselected", descriptorUpdate);

