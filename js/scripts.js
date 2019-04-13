
//Create faction Select's options.

var factionSelector = document.querySelector("#factionselector");
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
  
  if (!basetypes) {
    alert(
      "Not all data available yet ! Please select other faction. (better be Cryx)");
  } else {
    
    basetypes.forEach(basetype => {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(basetype));
      opt.value = basetype;
      basetypeSelector.appendChild(opt);
    });
  }
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



