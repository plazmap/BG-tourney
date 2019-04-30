
 
//Update descriptor everytime something is selected. TEMPORARY

function descriptorUpdate(){
    var descriptor = document.querySelector(".descriptor");
    if ((currentchar.name)&&(currentchar.faction)&&(currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.archetype+" "+currentchar.faction+" warcaster's name is "+currentchar.name;
    }else if ((currentchar.name)&&(currentchar.faction)&&(!currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster's name is "+currentchar.name;
    }else if ((!currentchar.name)&&(currentchar.faction)&&(currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.archetype+" "+currentchar.faction+" warcaster is nameless.";
    }else if ((!currentchar.name)&&(currentchar.faction)&&(!currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new "+currentchar.faction+" warcaster is nameless.";
    }else if ((currentchar.name)&&(!currentchar.faction)&&(!currentchar.archetype)){
        descriptor.innerHTML = "Your mighty new warcaster's name is "+currentchar.name;
    }
    var spells = document.querySelector(".spells");
    if ((currentchar.spells[0])&&(currentchar.spells[1])&&(currentchar.spells[2])){
        spells.innerHTML = "He/She yields powerfull magic : " +currentchar.spells[0]+" and "+currentchar.spells[1]+" and "+currentchar.spells[2];
    }else{
        spells.innerHTML = "";
    }
}

document.addEventListener("select:name", descriptorUpdate);
document.addEventListener("select:faction", descriptorUpdate);
document.addEventListener("select:archetype", descriptorUpdate);
document.addEventListener("select:spell", descriptorUpdate);




