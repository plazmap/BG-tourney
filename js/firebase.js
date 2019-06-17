function saveCaster(name, faction, archetype, firstcapacity,firstspells,pts25first,pts25second,firststat,pts50first,pts50second,secondstat,pts75first,pts75second,thirdstat) {
  firebase.database().ref('casters/' + name).set({
    name: name,
    faction: faction,
    archetype: archetype,
    firstspells: firstspells,
    firstcapacity: firstcapacity,
    pts25first: pts25first,
    pts25second: pts25second,
    firststat: firststat,
    pts50first: pts50first,
    pts50second: pts50second,
    secondstat: secondstat,
    pts75first: pts75first,
    pts75second: pts75second,
    thirdstat: thirdstat
  });
  alert(name + " has been saved.");
}

savetab = document.querySelector("#tab-level-4");
savetab.addEventListener("click", function(){
    
  
  
  if (currentchar.card.level != 0){
        saveCaster(currentchar.decisions.name, currentchar.decisions.faction, currentchar.decisions.archetype, currentchar.decisions.firstcapacity, currentchar.decisions.firstspells, currentchar.decisions.pts25first,currentchar.decisions.pts25second,currentchar.decisions.firststat,currentchar.decisions.pts50first,currentchar.decisions.pts50second,currentchar.decisions.secondstat,currentchar.decisions.pts75first,currentchar.decisions.pts75second,currentchar.decisions.thirdstat);
    }else{
        alert("Please pick caster initial choices.")
    }
});
