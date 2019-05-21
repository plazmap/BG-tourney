
//Delete all child nodes when needed.

document.addEventListener("select:faction", function(){
  deleteChildren(".archetype-selector");
  deleteChildren(".spell-selector");
  deleteChildren(".capacity-selector");
});

document.addEventListener("select:archetype", function() {  
  deleteChildren(".spell-selector");
  deleteChildren(".capacity-selector");
});


//Trigger customevent when caster name is registered.

var nameSelector = document.querySelector("#name-selector");
nameSelector.addEventListener("change", function(e){
  var name = this.value;
  var event = new CustomEvent ("select:name",{
    bubbles: true,
    detail: {
      name: name
    }
  });
  nameSelector.dispatchEvent(event);
});

//Create faction Select's options.

var factionSelector = document.querySelector(".faction-selector");

var opt = document.createElement("option");
opt.appendChild(document.createTextNode("Please select faction"));
opt.setAttribute ("hidden", "hidden");
opt.setAttribute ("disabled", "disabled");
opt.setAttribute ("selected", "selected");


factionSelector.appendChild(opt);

Object.keys(data.faction).forEach(factionkey => {
  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode(data.faction[factionkey].name));
  opt.value = factionkey;
  factionSelector.appendChild(opt);
});

//Trigger customevent when faction is selected.

factionSelector.addEventListener("change", function(e) {
  var event = new CustomEvent("select:faction", {
  bubbles: true,
  detail: {
    factionkey: e.target.value
    }
  });
  factionSelector.dispatchEvent(event);
});


//Create archetype selector once faction is selected.
var archetypeSelector = document.querySelector(".archetype-selector");

document.addEventListener("select:faction", function(e) {
  
  var factionkey = currentchar.faction;

  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode("Please select archetype"));
  opt.setAttribute ("hidden", "hidden");
  opt.setAttribute ("disabled", "disabled");
  opt.setAttribute ("selected", "selected");
  archetypeSelector.appendChild(opt);

  Object.keys(data.faction[factionkey].archetypes).forEach(archetypekey => {
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode(data.faction[factionkey].archetypes[archetypekey].name));
    opt.value = archetypekey;
    archetypeSelector.appendChild(opt);
  });
});

//Trigger customevent when archetype is selected.
archetypeSelector.addEventListener("change", function(e) {
  var event = new CustomEvent("select:archetype", {
    bubbles: true,
    detail: {
      archetypekey: e.target.value
    }
  });
  archetypeSelector.dispatchEvent(event);
});

//create initial capacity selector once archetype is selected.

var capacitySelector = document.querySelector(".capacity-selector");

document.addEventListener("select:archetype", function(e) {

  var archetypekey = currentchar.archetype;
  var factionkey = currentchar.faction;

  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode("Please select starting additional capacity"));
  opt.setAttribute ("hidden", "hidden");
  opt.setAttribute ("disabled", "disabled");
  opt.setAttribute ("selected", "selected");
  capacitySelector.appendChild(opt);

  Object.keys(data.faction[factionkey].archetypes[archetypekey].capacities.acquired).forEach(capacitykey => {   
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode(data.faction[factionkey].archetypes[archetypekey].capacities.acquired[capacitykey].name));
    opt.value = capacitykey;
    capacitySelector.appendChild(opt);
  });
});


//Trigger customevent when initial capacity is selected.

capacitySelector.addEventListener("change", function(e) {
  var event = new CustomEvent("select:capacity", {
    bubbles: true,
    detail: {
      capacitykey: e.target.value
    }
  });
  capacitySelector.dispatchEvent(event);
});


//Create spell selectors once archetype is selected. 

var spellSelectors = document.querySelectorAll(".spell-selector");
spellSelectors.forEach(spellSelector => {
  document.addEventListener("select:archetype", function(e){
    
    var archetypekey = currentchar.archetype;
    var factionkey = currentchar.faction;
  
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select a spell"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    spellSelector.appendChild(opt);

    Object.keys(data.faction[factionkey].archetypes[archetypekey].spelllist.initial).forEach(spellkey => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(data.faction[factionkey].archetypes[archetypekey].spelllist.initial[spellkey]));
      opt.value = data.faction[factionkey].archetypes[archetypekey].spelllist.initial[spellkey];
      spellSelector.appendChild(opt);
    });  
  });
});

//Trigger customevent when a spell is selected.

spellSelectors.forEach(spellSelector => {
  spellSelector.addEventListener("change", function(e){
    var event = new CustomEvent("select:spell", {
      bubbles: true,
      detail: {
        spellkey: e.target.value
      }
    });
    spellSelector.dispatchEvent(event);
  });
});

//Recreate spell selectors once a spell is selected. Minus THAT spell.

var spellSelectors = document.querySelectorAll(".spell-selector");
spellSelectors.forEach(spellSelector => {
  document.addEventListener("select:spell", function(e){
    var archetypekey = currentchar.archetype;
    var factionkey = currentchar.faction;
    var spells = data.faction[factionkey].archetypes[archetypekey].spelllist.initial;
    var spellselected = spellSelector.value;
    while (spellSelector.firstChild){
      spellSelector.removeChild(spellSelector.firstChild);
    }
    if (spellselected == "Please select a spell"){
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode("Please select a spell"));
      opt.setAttribute ("hidden", "hidden");
      opt.setAttribute ("disabled", "disabled");
      opt.setAttribute ("selected", "selected");
      spellSelector.appendChild(opt);
    }
    Object.keys(spells).forEach(spellkey => {
      if (!(currentchar.spells.includes(spells[spellkey]))||(spellselected == spells[spellkey])) {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(spells[spellkey]));
        opt.value = spells[spellkey];
        if (spellselected == spells[spellkey]){
          opt.setAttribute("selected", "selected");   
        } 
        spellSelector.appendChild(opt);
      }          
    });
  });
});
