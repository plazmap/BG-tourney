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
factionselector.appendChild(opt);

dataFactions.forEach(dataFaction => {
  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode(dataFaction));
  opt.value = dataFaction;
  factionselector.appendChild(opt);
});

//Trigger customevent when faction is selected.

factionSelector.addEventListener("change", function(e) {
  var faction = e.target.value;
  var event = new CustomEvent("factionselected", {
  bubbles: true,
  detail: {
    faction: faction
    }
  });
  factionSelector.dispatchEvent(event);
});


//Create archetype selector once faction is selected.
var archetypeSelector = document.querySelector("#archetypeselector");

document.addEventListener("factionselected", function(e) {
  
  var faction = e.detail.faction;
  var archetypes = dataCharTypes[faction];
  

    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select archetype"));
    opt.value = "error";
    archetypeSelector.appendChild(opt);
    archetypes.forEach(archetype => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(archetype));
      opt.value = archetype;
      archetypeSelector.appendChild(opt);
    });
  
});

//Trigger customevent when archetype is selected.
archetypeSelector.addEventListener("change", function(e) {
    var archetype = e.target.value;
    var event = new CustomEvent("archetypeselected", {
      bubbles: true,
      detail: {
        archetype: archetype
      }
    });
    archetypeSelector.dispatchEvent(event);
});


//Create first spell selector once archetype is selected.
var firstSpellSelector = document.querySelector("#firstspellselector");

document.addEventListener("archetypeselected", function(e) {
 
  var archetype = e.detail.archetype;
  var spells = dataSpells[archetype];
  

    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select first spell"));
    opt.value = "error";
    firstSpellSelector.appendChild(opt);
    spells.forEach(spell => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(spell));
      opt.value = spell;
      firstSpellSelector.appendChild(opt);
    });
  
});

//Trigger customevent when first spell is selected.
firstSpellSelector.addEventListener("change", function(e) {
  var firstspell = e.target.value;
  var event = new CustomEvent("firstspellselected", {
    bubbles: true,
    detail: {
      firstspell: firstspell
    }
  });
  firstSpellSelector.dispatchEvent(event);
});

//Create second spell selector once archetype is selected.
var secondSpellSelector = document.querySelector("#secondspellselector");

document.addEventListener("archetypeselected", function(e) {
 
  var archetype = e.detail.archetype;
  var spells = dataSpells[archetype];
  
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select second spell"));
    opt.value = "error";
        secondSpellSelector.appendChild(opt);
    spells.forEach(spell => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(spell));
      opt.value = spell;
      secondSpellSelector.appendChild(opt);
    });
  
});

//Trigger customevent when second spell is selected.
secondSpellSelector.addEventListener("change", function(e) {
  var secondspell = e.target.value;
  var event = new CustomEvent("secondspellselected", {
    bubbles: true,
    detail: {
      secondspell: secondspell
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




console.log(data.faction.cryx.archetypes.pirate.initialweapons.cutlass.POW);