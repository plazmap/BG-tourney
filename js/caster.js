//Constructor for Casters.

function caster() {
    this.name;
    this.faction;
    this.archetype;
    this.capacities = [];
    this.spells = [];
    this.feat; 
    this.level;
    this.firstdecision;
    this.seconddecision;
    this.thirddecision;
    this.forthdecision;
    this.fifthdecision;
    this.sixthdecision;
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

});


document.addEventListener("select:second25", function(e) {
    currentchar.firstdecision = e.detail.decision;
});

document.addEventListener("select:firststat", function(e) {
    currentchar.seconddecision = e.detail.decision;
});

document.addEventListener("select:first50", function(e) {
    currentchar.thirddecision = e.detail.decision;
});

document.addEventListener("select:second50", function(e) {
    currentchar.feat = e.detail.feat;
});

document.addEventListener("select:secondstat", function(e) {
    currentchar.fourthdecision = e.detail.decision;
});

document.addEventListener("select:second50", function(e) {
    currentchar.fifthdecision = e.detail.decision;
});

document.addEventListener("select:thirdstat", function(e) {
    currentchar.sixthdecision = e.detail.decision;
});



function casterLevel(){
    if ((currentchar.name)&&(currentchar.faction)&&(currentchar.archetype)&&(currentchar.capacities)&&(currentchar.spells.length == 3)){
        currentchar.level = 1;
    }else {
        currentchar.level = 0;
    }
}





