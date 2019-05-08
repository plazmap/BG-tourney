var selectors = document.querySelector(".constructor").querySelectorAll(".selector");
var helper = document.querySelector(".helper");

selectors.forEach(selector => {
  selector.addEventListener("mouseover", function(e) {

    //First we empty the helper when hovering over any selector. 
    deleteChildren(helper);

    //Then, depending on which selector, we display different infos. 

    if (selector.classList.contains("faction-selector")){
        Object.keys(data.faction).forEach(factionkey => {

        faction = document.createElement("div");
        faction.classList.add("sub-wrapper");

        factionname = document.createElement("p");
        factionname.classList.add("sub-name");
        factionname.innerHTML = data.faction[factionkey].name;

        factiondescription = document.createElement("p");
        factiondescription.classList.add("sub-descritpion");
        factiondescription.innerHTML = data.faction[factionkey].description;

        faction.appendChild(factionname);
        faction.appendChild(factiondescription);
        
        helper.appendChild(faction);
        });
        
      }else if ((selector.classList.contains("archetype-selector"))&&(currentchar.faction)){
        factionkey = currentchar.faction;
        Object.keys(data.faction[factionkey].archetypes).forEach(archetypekey => {

          archetype = document.createElement("div");
          archetype.classList.add("sub-wrapper");

          archetypename = document.createElement("p");
          archetypename.classList.add("sub-name");
          archetypename.innerHTML = data.faction[factionkey].archetypes[archetypekey].name;

          archetypedescription = document.createElement("p");
          archetypedescription.classList.add("sub-descritpion");
          archetypedescription.innerHTML = data.faction[factionkey].archetypes[archetypekey].description;

          archetype.appendChild(archetypename);
          archetype.appendChild(archetypedescription);
          
          helper.appendChild(archetype);
          });
        
      }else if((selector.classList.contains("capacity-selector"))&&(currentchar.archetype)){
        factionkey=currentchar.faction;
        archetypekey = currentchar.archetype;
        Object.keys(data.faction[factionkey].archetypes[archetypekey].capacities.acquired).forEach(capacitykey => {

          capacity = document.createElement("div");
          capacity.classList.add("sub-wrapper");

          capacityname = document.createElement("p");
          capacityname.classList.add("sub-name");
          capacityname.innerHTML = data.faction[factionkey].archetypes[archetypekey].capacities.acquired[capacitykey].name;

          capacitydescription = document.createElement("p");
          capacitydescription.classList.add("sub-descritpion");
          capacitydescription.innerHTML = data.faction[factionkey].archetypes[archetypekey].capacities.acquired[capacitykey].description;

          capacity.appendChild(capacityname);
          capacity.appendChild(capacitydescription);
          
          helper.appendChild(capacity);
          });
        
      }else if((selector.classList.contains("spell-selector"))&&(currentchar.archetype)){
        
        factionkey=currentchar.faction;
        archetypekey = currentchar.archetype;
        data.faction[factionkey].archetypes[archetypekey].spelllist.initial.forEach(spellkey => {
          console.log(spellkey);
          spell = document.createElement("div");
          spell.classList.add("sub-wrapper");

          spellname = document.createElement("p");
          spellname.classList.add("sub-name");
          spellname.innerHTML = data.spells[spellkey].name;

          

          spell.appendChild(spellname);
          
          
          helper.appendChild(spell);
          });
        
      }
  });
});

selectors.forEach(selector => {
  selector.addEventListener("mouseout", function(e) {
    deleteChildren(helper);
  });
});






