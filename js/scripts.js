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


//Create basetype selector once faction is selected.
var basetypeSelector = document.querySelector("#basetypeselector");

document.addEventListener("factionselected", function(e) {
  //First, we remove any eventual options.

  while (basetypeSelector.firstChild) {
      basetypeSelector.removeChild(basetypeSelector.firstChild);
}
  var faction = e.detail.faction;
  var basetypes = dataCharTypes[faction];
  

    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select archetype"));
    opt.value = "error";
    basetypeSelector.appendChild(opt);
    basetypes.forEach(basetype => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(basetype));
      opt.value = basetype;
      basetypeSelector.appendChild(opt);
    });
  
});

//Trigger customevent when basetype is selected.
basetypeSelector.addEventListener("change", function(e) {
    var basetype = e.target.value;
    var event = new CustomEvent("basetypeselected", {
      bubbles: true,
      detail: {
        basetype: basetype
      }
    });
    basetypeSelector.dispatchEvent(event);
  });


//Delete "please select" options from selects after first use.

document.addEventListener("factionselected", function(e) {  
    var factionselector = document.querySelector("#factionselector");
        if (factionselector.firstElementChild.value == "error"){
            factionselector.removeChild(factionselector.firstElementChild);
    }
});

document.addEventListener("basetypeselected", function(e) {  
    var basetypeSelector = document.querySelector("#basetypeselector");
          if (basetypeSelector.firstElementChild.value == "error"){
            basetypeSelector.removeChild(basetypeSelector.firstElementChild);
    }
});


