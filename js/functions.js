//Create usefull function in order to delete all child nodes for selectors.
  
function deleteChildren(selector){
  var selectors = document.querySelectorAll(selector);
  selectors.forEach(selector => {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  });
}

function createWeapon(type, weaponkey){
  //Type is "acquired" or "initial".

  var weapons = data.faction[currentchar.faction].archetypes[currentchar.archetype].weapons[type];
  var weaponbox = document.createElement("div");
  weaponbox.classList.add("sub-wrapper");
  
  //display weapon name.
  var name = document.createElement("p");
  name.innerHTML = weapons[weaponkey].name;
  name.classList.add("sub-name");
  
  weaponbox.appendChild(name);


  //display weapon stats.
  weaponstatsbox = document.createElement("div");
  weaponstatsbox.classList.add("wrapper4");

  Object.keys(weapons[weaponkey]).forEach(weapondetail => {
   
    if (!((weapondetail == "name")||(weapondetail == "description"))){
      
      var wrapper = document.createElement("div");
      wrapper.classList.add("wrapper3");
      var name = document.createElement("p");
      name.classList.add("stat-name");
      name.innerHTML = weapondetail;
      wrapper.appendChild(name);
      var value = document.createElement("p");
      value.classList.add("stat");
      if (weapondetail == "PS"){
        value.innerHTML = parseInt(weapons[weaponkey].POW) + parseInt(data.faction[currentchar.faction].archetypes[currentchar.archetype].stats.STR);;
      } else{
        value.innerHTML = weapons[weaponkey][weapondetail];
      }
      wrapper.appendChild(value);

      weaponstatsbox.appendChild(wrapper);
     
    }  
  });
  
  weaponbox.appendChild(weaponstatsbox);
  
  //If needed, display weapon description.
  if(weapons[weaponkey].description != "none"){
    var description = document.createElement("p");
    description.innerHTML = weapons[weaponkey].description;
    description.classList.add("sub-description");
    weaponbox.appendChild(description);
  }
  return (weaponbox);
}


function createCapacity (type, capacitykey){
  //Type is "acquired" or "initial".

  var capacities = data.faction[currentchar.faction].archetypes[currentchar.archetype].capacities[type];
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
  
  return(capacitybox);
}
