//Constructor for Casters.

function caster() {
    this.name;
    this.faction;
    this.archetype;
    this.capacities =[];
    this.spells = []; 
  }
  
//Initiate new caster.

var currentchar = new caster();

//Update Caster Object every time something is selected.

document.addEventListener("select:name", function(e) {
    currentchar.name = e.detail.name;
});

document.addEventListener("select:faction", function(e) {  
    currentchar.faction = e.detail.factionkey;
    currentchar.archetype=undefined;
    currentchar.spells=[];
});

document.addEventListener("select:archetype", function(e) {
    currentchar.archetype = e.detail.archetypekey;
    currentchar.spells=[];
});

document.addEventListener("select:capacity", function(e) {
    currentchar.capacities[0] = e.detail.capacitykey;
});

document.addEventListener("select:firstspell", function(e) {
    currentchar.spells[0] = e.detail.firstspellkey;
});

document.addEventListener("select:secondspell", function(e) {
    currentchar.spells[1] = e.detail.secondspellkey;
});

document.addEventListener("select:thirdspell", function(e) {
    currentchar.spells[2] = e.detail.thirdspellkey;
});
