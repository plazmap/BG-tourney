
 
// Update descriptor everytime something is selected. 

function descriptorUpdate(){
    var namebox = document.querySelector(".caster-name");
    var factionbox = document.querySelector(".caster-faction");
    var archetypebox = document.querySelector(".caster-archetype");
    var capacitiesbox = document.querySelector("#caster-capacities");
    var weaponsbox = document.querySelector("#caster-weapons");
    var featbox = document.querySelector("#caster-feat");
    var spellsbox = document.querySelector(".caster-spells");

    if (currentchar.name){
        namebox.innerHTML=currentchar.name;
    }else{ namebox.innerHTML="Unidentified Warcaster";
    }

    if(currentchar.faction){
        var faction = data.faction[currentchar.faction].name;
        factionbox.innerHTML = faction;
    }else{ factionbox.innerHTML = "No allegiance yet.";
    }   

    if(currentchar.archetype){

        //Display archetype 

        var archetype = data.faction[currentchar.faction].archetypes[currentchar.archetype].name;
        archetypebox.innerHTML = archetype;
        
        //Display stats

        var spd = document.querySelector("#SPD");
        var str = document.querySelector("#STR");
        var mat = document.querySelector("#MAT");
        var rat = document.querySelector("#RAT");
        var def = document.querySelector("#DEF");
        var arm = document.querySelector("#ARM");
        var cmd = document.querySelector("#CMD");
        var foc = document.querySelector("#FOC");
        spd.innerHTML=data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.SPD;
        str.innerHTML=data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.STR;
        mat.innerHTML=data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.MAT;
        rat.innerHTML=data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.RAT;
        def.innerHTML=data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.DEF;
        arm.innerHTML=data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.ARM;
        cmd.innerHTML=data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.CMD;
        foc.innerHTML=data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.FOC;
        
        //Display initial capacities

        deleteChildren("#caster-capacities");
        var subtitle = document.createElement("p");
        subtitle.classList.add("sub-title");
        subtitle.innerHTML = "Capacities";
        capacitiesbox.appendChild(subtitle);

        var capacities = data.faction[currentchar.faction].archetypes[currentchar.archetype].capacities.initial;
        Object.keys(capacities).forEach(capacitykey => {
            var name = document.createElement("p");
            var description = document.createElement("p");
            name.classList.add("sub-name");
            description.classList.add("sub-description");
            name.innerHTML = capacities[capacitykey].name;
            description.innerHTML = capacities[capacitykey].description;

            var capacitybox = document.createElement("div");
            capacitybox.classList.add("sub-wrapper");
            capacitybox.appendChild(name);
            capacitybox.appendChild(description);
            capacitiesbox.appendChild(capacitybox);
        });

        //Display initial weapons

        deleteChildren("#caster-weapons");
        var subtitle = document.createElement("p");
        subtitle.classList.add("sub-title");
        subtitle.innerHTML = "Weapons";
        weaponsbox.appendChild(subtitle);

        var weapons = data.faction[currentchar.faction].archetypes[currentchar.archetype].weapons.initial;
        Object.keys(weapons).forEach(weaponkey => {

            var name = document.createElement("p");
            name.innerHTML = weapons[weaponkey].name;
            name.classList.add("sub-name");
            var weaponbox = document.createElement("div");
            weaponbox.classList.add("sub-wrapper");
            weaponbox.appendChild(name);

            weaponstatsbox = document.createElement("div");
            weaponstatsbox.classList.add("wrapper4");

            var typewrapper = document.createElement("div");
            var RNGwrapper = document.createElement("div");
            var POWwrapper = document.createElement("div");
            var PSwrapper = document.createElement("div");
            typewrapper.classList.add("wrapper3");
            RNGwrapper.classList.add("wrapper3");
            POWwrapper.classList.add("wrapper3");
            PSwrapper.classList.add("wrapper3");
            
            var typename = document.createElement("p");
            typename.classList.add("stat-name");
            typename.innerHTML = "type";
            typewrapper.appendChild(typename);

            var RNGname = document.createElement("p");
            RNGname.classList.add("stat-name");
            RNGname.innerHTML = "RNG";
            RNGwrapper.appendChild(RNGname);

            var POWname = document.createElement("p");
            POWname.classList.add("stat-name");
            POWname.innerHTML = "POW";
            POWwrapper.appendChild(POWname);

            var PSname = document.createElement("p");
            PSname.classList.add("stat-name");
            PSname.innerHTML = "PS";
            PSwrapper.appendChild(PSname);

            var typevalue = document.createElement("p");
            typevalue.classList.add("stat");
            typevalue.innerHTML = weapons[weaponkey].type;
            typewrapper.appendChild(typevalue);

            var RNGvalue = document.createElement("p");
            RNGvalue.classList.add("stat");
            RNGvalue.innerHTML = weapons[weaponkey].RNG;
            RNGwrapper.appendChild(RNGvalue);

            var POWvalue = document.createElement("p");
            POWvalue.classList.add("stat");
            POWvalue.innerHTML = weapons[weaponkey].POW;
            POWwrapper.appendChild(POWvalue);

            var PSvalue = document.createElement("p");
            PSvalue.classList.add("stat");
            PSvalue.innerHTML = weapons[weaponkey].PS;
            PSwrapper.appendChild(PSvalue);

            weaponstatsbox.appendChild(typewrapper);
            weaponstatsbox.appendChild(RNGwrapper);
            weaponstatsbox.appendChild(POWwrapper);
            weaponstatsbox.appendChild(PSwrapper);

            weaponbox.appendChild(weaponstatsbox);
        

            if(weapons[weaponkey].description != "none"){
                var description = document.createElement("p");
                description.innerHTML = weapons[weaponkey].description;
                description.classList.add("sub-description");
                weaponbox.appendChild(description);
            }
            
            weaponsbox.appendChild(weaponbox);
        });


    }else{ archetypebox.innerHTML = "No allegiance yet.";
    }   
}













// function descriptorUpdate(){
//     var descriptor = document.querySelector(".descriptor");
//     if ((currentchar.name)&&(currentchar.faction)&&(currentchar.archetype)){
//         descriptor.innerHTML = "Your mighty new "+currentchar.archetype+" "+currentchar.faction+" warcaster's name is "+currentchar.name;
//     }else if ((currentchar.name)&&(currentchar.faction)&&(!currentchar.archetype)){
//         descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster's name is "+currentchar.name;
//     }else if ((!currentchar.name)&&(currentchar.faction)&&(currentchar.archetype)){
//         descriptor.innerHTML = "Your mighty new "+currentchar.archetype+" "+currentchar.faction+" warcaster is nameless.";
//     }else if ((!currentchar.name)&&(currentchar.faction)&&(!currentchar.archetype)){
//         descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster is nameless.";
//     }else if ((currentchar.name)&&(!currentchar.faction)&&(!currentchar.archetype)){
//         descriptor.innerHTML = "Your mighty new warcaster's name is "+currentchar.name;
//     }
//     var spells = document.querySelector(".spells");
//     if ((currentchar.spells[0])&&(currentchar.spells[1])&&(currentchar.spells[2])){
//         spells.innerHTML = "He/She yields powerfull magic : " +currentchar.spells[0]+" and "+currentchar.spells[1]+" and "+currentchar.spells[2];
//     }else{
//         spells.innerHTML = "";
//     }
// }

document.addEventListener("select:name", descriptorUpdate);
document.addEventListener("select:faction", descriptorUpdate);
document.addEventListener("select:archetype", descriptorUpdate);
document.addEventListener("select:spell", descriptorUpdate);




