
 
// Update descriptor everytime something is selected. 

function descriptorUpdate(){

    var namebox = document.querySelector(".caster-name");
    var factionbox = document.querySelector(".caster-faction");
    var archetypebox = document.querySelector(".caster-archetype");
    var capacitiesbox = document.querySelector("#caster-capacities");
    var weaponsbox = document.querySelector("#caster-weapons");
    var spellsbox = document.querySelector("#caster-spells");
    var featbox = document.querySelector(".caster-feat");
    
    //Display name.

    if (currentchar.card.name){
        namebox.innerHTML=currentchar.card.name;

    }else{
        namebox.innerHTML="Unidentified Warcaster";
    }

    // //Display faction.

    if(currentchar.card.faction){
        factionbox.innerHTML = data.factions[currentchar.card.faction].name;
    }else{ 
        factionbox.innerHTML = "No allegiance yet";
    }

    if(currentchar.card.archetype){
        archetypebox.innerHTML = data.factions[currentchar.card.faction].archetypes[currentchar.card.archetype].name;
    }else{ 
        factionbox.innerHTML = "Unkown Archetype";
    }
        var spd = document.querySelector("#SPD");
        var str = document.querySelector("#STR");
        var mat = document.querySelector("#MAT");
        var rat = document.querySelector("#RAT");
        var def = document.querySelector("#DEF");
        var arm = document.querySelector("#ARM");
        var cmd = document.querySelector("#CMD");
        var foc = document.querySelector("#FOC");
        spd.innerHTML=currentchar.card.stats.SPD;
        str.innerHTML=currentchar.card.stats.STR;
        mat.innerHTML=currentchar.card.stats.MAT;
        rat.innerHTML=currentchar.card.stats.RAT;
        def.innerHTML=currentchar.card.stats.DEF;
        arm.innerHTML=currentchar.card.stats.ARM;
        cmd.innerHTML=currentchar.card.stats.CMD;
        foc.innerHTML=currentchar.card.stats.FOC;
        
        //Display capacities

        deleteChildren("#caster-capacities");
        var subtitle = document.createElement("p");
        subtitle.classList.add("sub-title");
        subtitle.innerHTML = "Capacities";
        capacitiesbox.appendChild(subtitle);

        currentchar.card.capacities.forEach(capacitykey => {
            capacitiesbox.appendChild(createCapacity(capacitykey));
        });
    
        //Display weapons

        deleteChildren("#caster-weapons");
        var subtitle = document.createElement("p");
        subtitle.classList.add("sub-title");
        subtitle.innerHTML = "Weapons";
        weaponsbox.appendChild(subtitle);

        currentchar.card.weapons.forEach(weaponkey => {
            weaponsbox.appendChild(createWeapon(weaponkey));
        });

        //Display spells
  
        deleteChildren("#caster-spells");
        var subtitle = document.createElement("p");
        subtitle.classList.add("sub-title");
        subtitle.innerHTML = "Spells";
        spellsbox.appendChild(subtitle);

        currentchar.card.spells.forEach(spellkey => {
            spellsbox.appendChild(createSpell(spellkey));
        });
    }
