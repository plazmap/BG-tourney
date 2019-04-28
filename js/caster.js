 
 
 //Constructor for Casters.
function caster() {
    this.name;
    this.faction;
    this.archetype;
    this.capacities =[];
    this.spells = []; 
  }
  
var currentchar = new caster();




//Create usefull function in order to delete all child nodes for selectors.
function deleteChildren(select){
   var selector = document.querySelector("#"+select);
    while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}

//Update Caster Object and other selectors every time something is selected.

document.addEventListener("nameselected", function(e) {
    currentchar.name = e.detail.name;
});

document.addEventListener("factionselected", function(e) {  
    currentchar.faction = e.detail.factionkey;
    currentchar.archetype=undefined;
    currentchar.spells=[];
    deleteChildren("archetypeselector");
    deleteChildren("firstspellselector");
    deleteChildren("secondspellselector");
});

document.addEventListener("archetypeselected", function(e) {
    currentchar.archetype = e.detail.archetypekey;
    currentchar.spells=[];
    deleteChildren("firstspellselector");
    deleteChildren("secondspellselector");
    deleteChildren("thirdspellselector");
    deleteChildren("capacityselector");
});

document.addEventListener("capacityselected", function(e) {
    currentchar.capacities[0] = e.detail.capacitykey;
});

document.addEventListener("firstspellselected", function(e) {
    currentchar.spells[0] = e.detail.firstspellkey;
});

document.addEventListener("secondspellselected", function(e) {
    currentchar.spells[1] = e.detail.secondspellkey;
});

document.addEventListener("thirdspellselected", function(e) {
    currentchar.spells[2] = e.detail.thirdspellkey;
});

 
//update descriptor everytime something is selected. TEMPORARY

function descriptorUpdate(){
    var descriptor = document.querySelector(".descriptor");
    if ((currentchar.name)&&(currentchar.faction)&&(currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.archetype+" "+currentchar.faction+" warcaster's name is "+currentchar.name;
    }else if ((currentchar.name)&&(currentchar.faction)&&(!currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster's name is "+currentchar.name;
    }else if ((!currentchar.name)&&(currentchar.faction)&&(currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.archetype+" "+currentchar.faction+" warcaster is nameless.";
    }else if ((!currentchar.name)&&(currentchar.faction)&&(!currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster is nameless.";
    }else if ((currentchar.name)&&(!currentchar.faction)&&(!currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new warcaster's name is "+currentchar.name;
    }
    var spells = document.querySelector(".spells");
    if ((currentchar.spells[0])&&(currentchar.spells[1])&&(currentchar.spells[2])){
        spells.innerHTML = "He/She yields powerfull magic : " +currentchar.spells[0]+" and "+currentchar.spells[1]+" and "+currentchar.spells[2];
    }else{
        spells.innerHTML = "";
    }

}
document.addEventListener("nameselected", descriptorUpdate);
document.addEventListener("factionselected", descriptorUpdate);
document.addEventListener("archetypeselected", descriptorUpdate);
document.addEventListener("firstspellselected", descriptorUpdate);
document.addEventListener("secondspellselected", descriptorUpdate);
document.addEventListener("thirdspellselected", descriptorUpdate);



