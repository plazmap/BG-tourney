  //Constructor for Casters.
function caster(name, faction, basetype) {
    this.name = name;
    this.faction = faction;
    this.basetype = basetype;
  }
  
var currentchar = new caster();

//Update Caster Object every time something is selected;
document.addEventListener("nameselected", function(e) {
    currentchar.name = e.detail.name;
    console.log(currentchar);
});

document.addEventListener("factionselected", function(e) {
    currentchar.faction = e.detail.faction;
    currentchar.basetype=undefined;
    console.log(currentchar);
});

document.addEventListener("basetypeselected", function(e) {
    currentchar.basetype = e.detail.basetype;
    console.log(currentchar);
});
    
    
var descriptorUpdate = function(){
    var descriptor = document.querySelector(".descriptor");
    console.log("plop31");
    if ((currentchar.name)&&(currentchar.faction)&&(currentchar.basetype)){
        console.log("plop1");
        descriptor.innerHTML = "Your mighty new "+currentchar.basetype+" "+currentchar.faction+" warcaster's name is "+currentchar.name;
    }else if ((currentchar.name)&&(currentchar.faction)&&(!currentchar.basetype)){
        console.log("plop2");
        descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster's name is "+currentchar.name;
    }else if ((!currentchar.name)&&(currentchar.faction)&&(currentchar.basetype)){
        console.log("plop3");
        descriptor.innerHTML = "Your mighty new "+currentchar.basetype+" "+currentchar.faction+" warcaster is nameless.";
    }else if ((!currentchar.name)&&(currentchar.faction)&&(!currentchar.basetype)){
        console.log("plop4");
        descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster is nameless.";
    } 
}
document.addEventListener("nameselected", descriptorUpdate);
document.addEventListener("factionselected", descriptorUpdate);
document.addEventListener("basetypeselected", descriptorUpdate);

