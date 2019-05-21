//Constructor for Casters.

function caster() {
    this.name;
    this.faction;
    this.archetype;
    this.capacities = [];
    this.spells = [];
    this.feat; 
    this.level;
  }
  
//Initiate new caster.

var currentchar = new caster();
currentchar.level = 0;

//Update Caster Object every time something is selected.

document.addEventListener("select:name", function(e) {
    currentchar.name = e.detail.name;
    casterLevel();
});

document.addEventListener("select:faction", function(e) {  
    currentchar.faction = e.detail.factionkey;
    currentchar.archetype=undefined;
    currentchar.capacities=[];
    currentchar.spells=[];
    casterLevel();
});

document.addEventListener("select:archetype", function(e) {
    currentchar.archetype = e.detail.archetypekey;
    currentchar.capacities=[];
    currentchar.spells=[];
    casterLevel()
});

document.addEventListener("select:capacity", function(e) {
    currentchar.capacities[0] = e.detail.capacitykey;
    casterLevel();
});

document.addEventListener("select:spell", function(e) {
    currentchar.spells =[];
    var spellSelectors = document.querySelectorAll(".spell-selector");
    spellSelectors.forEach(spellSelector => {
        if (spellSelector.value != "Please select a spell"){
            currentchar.spells.unshift(spellSelector.value);
        }
    })
    casterLevel();
    console.log(currentchar.level);
});

function casterLevel(){
    if ((currentchar.name)&&(currentchar.faction)&&(currentchar.archetype)&&(currentchar.capacities)&&(currentchar.spells.length == 3)){
        currentchar.level = 1;
    }else {
        currentchar.level = 0;
    }
}





