var nameSelector = document.querySelector("#name-selector");
var factionSelector = document.querySelector(".faction-selector");
var archetypeSelector = document.querySelector(".archetype-selector");
var capacitySelector = document.querySelector(".capacity-selector");
var spellSelectors = document.querySelectorAll(".spell-selector");
var first25Selector = document.querySelector(".pts25-1selector");
var second25Selector = document.querySelector(".pts25-2selector");
var firstStatSelector = document.querySelector(".stat-1selector");
var first50Selector = document.querySelector(".pts50-1selector");
var second50Selector = document.querySelector(".pts50-2selector");
var secondStatSelector = document.querySelector(".stat-2selector");
var first75Selector = document.querySelector(".pts75-1selector");
var second75Selector = document.querySelector(".pts75-2selector");
var thirdStatSelector = document.querySelector(".stat-3selector");
var upgradeStats = ["MAT","RAT","DEF","ARM"];


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

function createFactionSelector(){

    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select faction"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");

    factionSelector.appendChild(opt);

    Object.keys(data.factions).forEach(factionkey => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(data.factions[factionkey].name));
        opt.value = factionkey;
        factionSelector.appendChild(opt);
    });

    factionSelector.addEventListener("change", function(e) {
        var event = new CustomEvent("select:faction", {
        bubbles: true,
        detail: {
            factionkey: e.target.value
            }
        });
        factionSelector.dispatchEvent(event);
    });
}

function createArchetypeSelector(){

    var factionkey = currentchar.decisions.faction;
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select archetype"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    archetypeSelector.appendChild(opt);
  
    Object.keys(data.factions[factionkey].archetypes).forEach(archetypekey => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(data.factions[factionkey].archetypes[archetypekey].name));
      opt.value = archetypekey;
      archetypeSelector.appendChild(opt);
    });
    
    archetypeSelector.addEventListener("change", function(e) {
        var event = new CustomEvent("select:archetype", {
          bubbles: true,
          detail: {
            archetypekey: e.target.value
          }
        });
        archetypeSelector.dispatchEvent(event);
      });
  }
  

function createFirstCapacitySelector (){
    
  var archetypekey = currentchar.decisions.archetype;
  var factionkey = currentchar.decisions.faction;

  var opt = document.createElement("option");
  opt.appendChild(document.createTextNode("Please select starting additional capacity"));
  opt.setAttribute ("hidden", "hidden");
  opt.setAttribute ("disabled", "disabled");
  opt.setAttribute ("selected", "selected");
  capacitySelector.appendChild(opt);

  data.factions[factionkey].archetypes[archetypekey].capacities.acquired.forEach(capacitykey => {  
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode(data.capacities[capacitykey].name));
    opt.value = capacitykey;
    capacitySelector.appendChild(opt);
  });

  capacitySelector.addEventListener("change", function(e) {
    var event = new CustomEvent("select:capacity", {
        bubbles: true,
        detail: {
        capacitykey: e.target.value
        }
    });
    capacitySelector.dispatchEvent(event);
  });
}

function createSpellSelector (spellSelector){
    var archetypekey = currentchar.decisions.archetype;
    var factionkey = currentchar.decisions.faction;
  
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select a spell"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    spellSelector.appendChild(opt);

    data.factions[factionkey].archetypes[archetypekey].spelllist.initial.forEach(spellkey => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(data.spells[spellkey].name));
      opt.value = spellkey;
      spellSelector.appendChild(opt);
    });  
 
  spellSelector.addEventListener("change", function(e){
    var event = new CustomEvent("select:spell", {
      bubbles: true,
      detail: {
        spellkey: e.target.value
      }
    });
    spellSelector.dispatchEvent(event);
  });
}
    
function updateSpellSelector(spellSelector){
    var archetypekey = currentchar.decisions.archetype;
    var factionkey = currentchar.decisions.faction;
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
    data.factions[factionkey].archetypes[archetypekey].spelllist.initial.forEach(spellkey => {
      if (!(currentchar.decisions.firstspells.includes(spellkey))||(spellselected == spellkey)) {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(data.spells[spellkey].name));
        opt.value = spellkey;
        if (spellselected == spellkey){
          opt.setAttribute("selected", "selected");   
        } 
        spellSelector.appendChild(opt);
      }          
    });
}


function createFirst25Selector(){
    var opt1 = document.createElement("option");
    opt1.appendChild(document.createTextNode("Please select spell or capacity"));
    opt1.setAttribute ("hidden", "hidden");
    opt1.setAttribute ("disabled", "disabled");
    opt1.setAttribute ("selected", "selected");
    first25Selector.appendChild(opt1);
    var opt2 = document.createElement("option");
    opt2.appendChild(document.createTextNode("New spell"));
    opt2.value = "spell";
    first25Selector.appendChild(opt2);
    var opt3 = document.createElement("option");
    opt3.appendChild(document.createTextNode("New capacity"));
    opt3.value = "capacity";
    first25Selector.appendChild(opt3);

    first25Selector.addEventListener("change", function(e){

        var event = new CustomEvent ("select:first25",{
            bubbles: true,
            detail: {
                decision: e.target.value
            }
        });
    first25Selector.dispatchEvent(event);
    });
}

function createSecond25Selector(){
    
    var archetypekey = currentchar.decisions.archetype;
    var factionkey = currentchar.decisions.faction;
    
    if (currentchar.decisions.pts25first == "spell"){
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Please select a spell"));
        opt.setAttribute ("hidden", "hidden");
        opt.setAttribute ("disabled", "disabled");
        opt.setAttribute ("selected", "selected");
        second25Selector.appendChild(opt);

        data.factions[factionkey].archetypes[archetypekey].spelllist.initial.forEach(spellkey => {
            if (!(currentchar.decisions.firstspells.includes(spellkey))){
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(data.spells[spellkey].name));
                opt.value = spellkey;
                second25Selector.appendChild(opt);
            }
        });
    }else if (currentchar.decisions.pts25first == "capacity"){
        
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Please select a capacity"));
        opt.setAttribute ("hidden", "hidden");
        opt.setAttribute ("disabled", "disabled");
        opt.setAttribute ("selected", "selected");
        second25Selector.appendChild(opt);

        data.factions[factionkey].archetypes[archetypekey].capacities.acquired.forEach(capacitykey => {
            if (!(currentchar.decisions.firstcapacity == capacitykey)){
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(data.capacities[capacitykey].name));
                opt.value = capacitykey;
                second25Selector.appendChild(opt);
            }
        });
    }

    second25Selector.addEventListener("change", function(e){

        var event = new CustomEvent ("select:second25",{
            bubbles: true,
            detail: {
                decision: e.target.value
            }
        });
        second25Selector.dispatchEvent(event);
    });
}

function create50Selectors(){

    var archetypekey = currentchar.decisions.archetype;
    var factionkey = currentchar.decisions.faction;

    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select additionnal spell"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    first50Selector.appendChild(opt);
    data.factions[factionkey].archetypes[archetypekey].weapons.acquired.forEach(weaponkey => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(data.weapons[weaponkey].name));
        opt.value = weaponkey;
        first50Selector.appendChild(opt);
    });

    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select your Feat ! "));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    second50Selector.appendChild(opt);
    data.factions[factionkey].archetypes[archetypekey].feats.forEach(featkey => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(data.feats[featkey].name));
        opt.value = featkey;
        second50Selector.appendChild(opt);
    });

    first50Selector.addEventListener("change", function(e){

        var event = new CustomEvent ("select:first50",{
            bubbles: true,
            detail: {
                decision: e.target.value
            }
        });
        first50Selector.dispatchEvent(event);
    });

    second50Selector.addEventListener("change", function(e){

        var event = new CustomEvent ("select:second50",{
            bubbles: true,
            detail: {
                decision: e.target.value
            }
        });
        second50Selector.dispatchEvent(event);
    });
}

function createFirst75Selector(){

    var opt1 = document.createElement("option");
    opt1.appendChild(document.createTextNode("Please select spell or capacity"));
    opt1.setAttribute ("hidden", "hidden");
    opt1.setAttribute ("disabled", "disabled");
    opt1.setAttribute ("selected", "selected");
    first75Selector.appendChild(opt1);
    var opt2 = document.createElement("option");
    opt2.appendChild(document.createTextNode("New spell"));
    opt2.value = "spell";
    first75Selector.appendChild(opt2);
    var opt3 = document.createElement("option");
    opt3.appendChild(document.createTextNode("New capacity"));
    opt3.value = "capacity";
    first75Selector.appendChild(opt3);
        
    first75Selector.addEventListener("change", function(e){

        var event = new CustomEvent ("select:first75",{
            bubbles: true,
            detail: {
                decision: e.target.value
            }
        });
        first75Selector.dispatchEvent(event);
    });
}

function createSecond75Selector(){
    var archetypekey = currentchar.decisions.archetype;
    var factionkey = currentchar.decisions.faction;
    
    if (currentchar.decisions.pts75first == "spell"){
        
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Please select a spell"));
        opt.setAttribute ("hidden", "hidden");
        opt.setAttribute ("disabled", "disabled");
        opt.setAttribute ("selected", "selected");
        second75Selector.appendChild(opt);

        data.factions[factionkey].archetypes[archetypekey].spelllist.initial.forEach(spellkey => {
            if ((!(currentchar.decisions.firstspells.includes(spellkey)))&&(currentchar.decisions.pts25second!=spellkey)){
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(data.spells[spellkey].name));
                opt.value = spellkey;
                second75Selector.appendChild(opt);
            }
        });
        data.factions[factionkey].archetypes[archetypekey].spelllist.extended.forEach(spellkey => {
            var opt = document.createElement("option");
            opt.appendChild(document.createTextNode(data.spells[spellkey].name));
            opt.value = spellkey;
            second75Selector.appendChild(opt);
        });


    }else if (currentchar.decisions.pts75first == "capacity"){
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Please select a capacity"));
        opt.setAttribute ("hidden", "hidden");
        opt.setAttribute ("disabled", "disabled");
        opt.setAttribute ("selected", "selected");
        second75Selector.appendChild(opt);

        data.factions[factionkey].archetypes[archetypekey].capacities.acquired.forEach(capacitykey => {
            if ((currentchar.decisions.firstcapacity != capacitykey)&&(currentchar.decisions.pts25second!=capacitykey)){
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(data.capacities[capacitykey].name));
                opt.value = capacitykey;
                second75Selector.appendChild(opt);
            }
        });
    }


    second75Selector.addEventListener("change", function(e){

        var event = new CustomEvent ("select:second75",{
            bubbles: true,
            detail: {
                decision: e.target.value
            }
        });
        second75Selector.dispatchEvent(event);
    });
}


function createStatSelector(statSelector, eventname){
        
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select one stat"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    statSelector.appendChild(opt);

    upgradeStats.forEach(stat => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(stat));
        opt.value = stat;
        statSelector.appendChild(opt);
    });


statSelector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:"+eventname,{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    statSelector.dispatchEvent(event);
});

}