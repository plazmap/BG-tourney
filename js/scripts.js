//Trigger customevent when caster name is registered.

var nameSelector = document.querySelector("#nameselector");
nameSelector.addEventListener("change", function(e){
  var name = this.value;
  var event = new CustomEvent ("nameselected",{
    bubbles: true,
    detail: {
      name: name
    }
  });
  nameSelector.dispatchEvent(event);
});

//Create faction Select's options.

var factionSelector = document.querySelector("#factionselector");

var opt = document.createElement("option");
opt.appendChild(document.createTextNode("Please select faction"));
opt.value = "error";
factionSelector.appendChild(opt);

Object.keys(data.faction).forEach(factionkey => {
  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode(data.faction[factionkey].name));
  opt.value = factionkey;
  factionSelector.appendChild(opt);
});

//Trigger customevent when faction is selected.

factionSelector.addEventListener("change", function(e) {

  var event = new CustomEvent("factionselected", {
  bubbles: true,
  detail: {
    factionkey: e.target.value
    }
  });
  factionSelector.dispatchEvent(event);
});


//Create archetype selector once faction is selected.
var archetypeSelector = document.querySelector("#archetypeselector");

document.addEventListener("factionselected", function(e) {
  
  var factionkey = e.detail.factionkey;
  // var archetypes = dataCharTypes[factionkey];

    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select archetype"));
    opt.value = "error";
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
    var event = new CustomEvent("archetypeselected", {
      bubbles: true,
      detail: {
        archetypekey: e.target.value
      }
    });
    archetypeSelector.dispatchEvent(event);
});


//Create first spell selector once archetype is selected.
var firstSpellSelector = document.querySelector("#firstspellselector");

document.addEventListener("archetypeselected", function(e) {
 
  var archetypekey = e.detail.archetypekey;

  factionkey = currentchar.faction;

  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode("Please select first spell"));
  opt.value = "error";
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
  var event = new CustomEvent("firstspellselected", {
    bubbles: true,
    detail: {
      firstspellkey: e.target.value
    }
  });
  firstSpellSelector.dispatchEvent(event);
});

//Create second spell selector once archetype is selected.
var secondSpellSelector = document.querySelector("#secondspellselector");

document.addEventListener("archetypeselected", function(e) {
 
  var archetypekey = e.detail.archetypekey;
  factionkey = currentchar.faction;
  
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select second spell"));
    opt.value = "error";
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
  var event = new CustomEvent("secondspellselected", {
    bubbles: true,
    detail: {
      secondspellkey: e.target.value
    }
  });
  secondSpellSelector.dispatchEvent(event);
});


//Delete "please select" options from selects after first use.

function deleteFirstOption(selector){
  var select = document.querySelector("#"+selector);
  if (select.firstElementChild.value == "error"){
    select.removeChild(select.firstElementChild);
  }
}

document.addEventListener("factionselected", function(){
  deleteFirstOption("factionselector");
});

document.addEventListener("archetypeselected", function() {  
  deleteFirstOption("archetypeselector");
});

document.addEventListener("firstspellselected", function() {  
  deleteFirstOption("firstspellselector");
});

document.addEventListener("secondspellselected", function() {  
  deleteFirstOption("secondspellselector");
 
});



