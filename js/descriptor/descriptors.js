
function createWeapon(weaponkey){
    //Type is "acquired" or "initial".
  
    var weaponbox = document.createElement("div");
    weaponbox.classList.add("sub-wrapper");
    
    //display weapon name.
    var name = document.createElement("p");
    name.innerHTML = data.weapons[weaponkey].name;
    name.classList.add("sub-name");
    
    weaponbox.appendChild(name);
  
  
    //display weapon stats.
    weaponstatsbox = document.createElement("div");
    weaponstatsbox.classList.add("wrapper4");
  
    Object.keys(data.weapons[weaponkey]).forEach(weapondetail => {
     
      if (!((weapondetail == "name")||(weapondetail == "description"))){
        
        var wrapper = document.createElement("div");
        wrapper.classList.add("wrapper5");
        var name = document.createElement("p");
        name.classList.add("stat-name");
        name.innerHTML = weapondetail;
        wrapper.appendChild(name);
        var value = document.createElement("p");
        value.classList.add("stat");
        if (weapondetail == "PS"){
          value.innerHTML = parseInt(data.weapons[weaponkey].POW) + parseInt(currentchar.card.stats.STR);;
        } else{
          value.innerHTML = data.weapons[weaponkey][weapondetail];
        }
        wrapper.appendChild(value);
  
        weaponstatsbox.appendChild(wrapper);
       
      }  
    });
    
    weaponbox.appendChild(weaponstatsbox);
    
    //If needed, display weapon description.
    if(data.weapons[weaponkey].description != "none"){
      var description = document.createElement("p");
      description.innerHTML = data.weapons[weaponkey].description;
      description.classList.add("sub-description");
      weaponbox.appendChild(description);
    }
    return (weaponbox);
  }
  
  
  function createCapacity (capacitykey){
  
    var name = document.createElement("p");
    var description = document.createElement("p");
    name.classList.add("sub-name");
    description.classList.add("sub-description");
    name.innerHTML = data.capacities[capacitykey].name;
    description.innerHTML = data.capacities[capacitykey].description;
  
    var capacitybox = document.createElement("div");
    capacitybox.classList.add("sub-wrapper");
    capacitybox.appendChild(name);
    capacitybox.appendChild(description);
    
    return(capacitybox);
  }
  
  
  function createSpell (spellkey){
  
    var spellbox = document.createElement("div");
    spellbox.classList.add("sub-wrapper");
    
    //display spell name.
    var name = document.createElement("p");
    name.innerHTML = data.spells[spellkey].name;
    name.classList.add("sub-name");
    
    spellbox.appendChild(name);
  
  
    //display spell stats.
    spellstatsbox = document.createElement("div");
    spellstatsbox.classList.add("wrapper4");
  
    Object.keys(data.spells[spellkey]).forEach(spelldetail => {
     
      if (!((spelldetail == "name")||(spelldetail == "description"))){
        
        var wrapper = document.createElement("div");
        wrapper.classList.add("wrapper5");
        var name = document.createElement("p");
        name.classList.add("stat-name");
        name.innerHTML = spelldetail;
        wrapper.appendChild(name);
        var value = document.createElement("p");
        value.classList.add("stat");
        value.innerHTML = data.spells[spellkey][spelldetail];
      
        wrapper.appendChild(value);
  
        spellstatsbox.appendChild(wrapper);
       
      }  
    });
    
    spellbox.appendChild(spellstatsbox);
    
    //Display spell description.
   
    var description = document.createElement("p");
    description.innerHTML = data.spells[spellkey].description;
    description.classList.add("sub-description");
    spellbox.appendChild(description);
    
    return (spellbox);
  
  }
  
  function createFeat (featkey){
    var name = document.createElement("p");
    var description = document.createElement("p");
    name.classList.add("sub-name");
    description.classList.add("sub-description");
    name.innerHTML = data.feats[featkey].name;
    description.innerHTML = data.feats[featkey].description;
  
    var featbox = document.createElement("div");
    featbox.classList.add("sub-wrapper");
    featbox.appendChild(name);
    featbox.appendChild(description);
    
    return(featbox);
  
  }
  
  