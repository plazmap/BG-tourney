//Constructor for Casters.

function caster() {
    this.name;
    this.faction;
    this.archetype;
    this.capacities =[];
    this.spells = [];
    this.feat; 
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

document.addEventListener("select:spell", function(e) {
    currentchar.spells =[];
    var spellSelectors = document.querySelectorAll(".spell-selector");
    spellSelectors.forEach(spellSelector => {
        if (spellSelector.value != "Please select a spell"){
            currentchar.spells.unshift(spellSelector.value);
        }
    })
});

