//Pseudo config. Modifiable.
var charFactions = ["Cryx", "Cygnar", "Khador", "Menoth", "Skorne", "Other deviants"];

var charTypes ={
    Cryx: ["Pirate", "Lich", "Sorcerer"],
    Cygnar: ["Arcanist", "Combattant", "Gun Mage"],
    Khador: ["Koldun", "ManHunter", "Manowar"]
}


//Constructor for Casters.
function caster(name, faction, baseprofile) {
    this.name = name;
    this.faction = faction;
    this.baseprofile = baseprofile;
}

//Create faction Select's options

var factions = document.querySelector("#factions");
charFactions.forEach(charFaction => {
    var opt = document.createElement("option");
    opt.appendChild( document.createTextNode(charFaction) );
    opt.value= charFaction;
    factions.appendChild(opt);
});


factions.addEventListener("change", function(e){
    var faction = e.target.value;
    var event = new CustomEvent("factionselected", {"faction":faction});
    document.dispatchEvent(event);
});

var descriptor = document.querySelector(".descriptor");
document.addEventListener("factionselected", function(e){
    console.log("plop");
    console.log(e);
    descriptor.innerHTML = "Your mighty new caster's faction is "+e.faction;
});

