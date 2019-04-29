//Delete all child nodes when needed.

document.addEventListener("select:faction", function(){
  deleteChildren("archetype-selector");
  deleteChildren("first-spell-selector");
  deleteChildren("second-spell-selector");
  deleteChildren("third-spell-selector");
  deleteChildren("capacity-selector");
});

document.addEventListener("select:archetype", function() {  
  deleteChildren("first-spell-selector");
  deleteChildren("second-spell-selector");
  deleteChildren("third-spell-selector");
  deleteChildren("capacity-selector");
});

 
//Trigger customevent when caster name is registered.

var nameSelector = document.querySelector("#name-selector");
console.log(nameSelector);
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

var factionSelector = document.querySelector("#faction-selector");

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
var archetypeSelector = document.querySelector("#archetype-selector");

document.addEventListener("select:faction", function(e) {
  
  var factionkey = e.detail.factionkey;
  // var archetypes = dataCharTypes[factionkey];

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

var capacitySelector = document.querySelector("#capacity-selector");

document.addEventListener("select:archetype", function(e) {
 
  var archetypekey = e.detail.archetypekey;

  factionkey = currentchar.faction;

  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode("Please select initial capacity"));
  opt.setAttribute ("hidden", "hidden");
  opt.setAttribute ("disabled", "disabled");
  opt.setAttribute ("selected", "selected");
  capacitySelector.appendChild(opt);
  
  Object.keys(data.faction[factionkey].archetypes[archetypekey].capacities.initial).forEach(capacitykey => {
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode(data.faction[factionkey].archetypes[archetypekey].capacities.initial[capacitykey].name));
    opt.value = data.faction[factionkey].archetypes[archetypekey].spelllist.initial[capacitykey];
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

//Create first spell selector once archetype is selected.

var firstSpellSelector = document.querySelector("#first-spell-selector");

document.addEventListener("select:archetype", function(e) {
 
  var archetypekey = e.detail.archetypekey;

  factionkey = currentchar.faction;

  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode("Please select first spell"));
  opt.setAttribute ("hidden", "hidden");
  opt.setAttribute ("disabled", "disabled");
  opt.setAttribute ("selected", "selected");
  firstSpellSelector.appendChild(opt);
  Object.keys(data.faction[factionkey].archetypes[archetypekey].spelllist.initial).forEach(spellkey => {
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode(data.faction[factionkey].archetypes[archetypekey].spelllist.initial[spellkey]));
    opt.value = data.faction[factionkey].archetypes[archetypekey].spelllist.initial[spellkey];
    firstSpellSelector.appendChild(opt);
  });
});

//Trigger customevent when first spell is selected.
firstSpellSelector.addEventListener("change", function(e) {
  var event = new CustomEvent("select:firstspell", {
    bubbles: true,
    detail: {
      firstspellkey: e.target.value
    }
  });
  firstSpellSelector.dispatchEvent(event);
});

//Create second spell selector once archetype is selected.
var secondSpellSelector = document.querySelector("#second-spell-selector");

document.addEventListener("select:archetype", function(e) {
 
  var archetypekey = e.detail.archetypekey;
  factionkey = currentchar.faction;
  
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select second spell"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
        secondSpellSelector.appendChild(opt);
      Object.keys(data.faction[factionkey].archetypes[archetypekey].spelllist.initial).forEach(spellkey => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(data.faction[factionkey].archetypes[archetypekey].spelllist.initial[spellkey]));
      opt.value = data.faction[factionkey].archetypes[archetypekey].spelllist.initial[spellkey];
      secondSpellSelector.appendChild(opt);
    });
});

//Trigger customevent when second spell is selected.
secondSpellSelector.addEventListener("change", function(e) {
  var event = new CustomEvent("select:secondspell", {
    bubbles: true,
    detail: {
      secondspellkey: e.target.value
    }
  });
  secondSpellSelector.dispatchEvent(event);
});

//Create third spell selector once archetype is selected.
var thirdSpellSelector = document.querySelector("#third-spell-selector");

document.addEventListener("select:archetype", function(e) {
 
  var archetypekey = e.detail.archetypekey;
  factionkey = currentchar.faction;
  
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select third spell"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    thirdSpellSelector.appendChild(opt);

    Object.keys(data.faction[factionkey].archetypes[archetypekey].spelllist.initial).forEach(spellkey => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(data.faction[factionkey].archetypes[archetypekey].spelllist.initial[spellkey]));
      opt.value = data.faction[factionkey].archetypes[archetypekey].spelllist.initial[spellkey];
      thirdSpellSelector.appendChild(opt);
    });
});

//Trigger customevent when third spell is selected.
thirdSpellSelector.addEventListener("change", function(e) {
  var event = new CustomEvent("select:thirdspell", {
    bubbles: true,
    detail: {
      thirdspellkey: e.target.value
    }
  });
  thirdSpellSelector.dispatchEvent(event);
});










