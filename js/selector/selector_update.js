function selectorUpdate(){
    deleteChildren(factionSelector);
    deleteChildren(archetypeSelector);
    deleteChildren(".spell-selector");
    deleteChildren(capacitySelector);
    deleteChildren(first25Selector);
    deleteChildren(second25Selector);
    deleteChildren(firstStatSelector);
    deleteChildren(first50Selector);
    deleteChildren(second50Selector);
    deleteChildren(secondStatSelector);
    deleteChildren(first75Selector);
    deleteChildren(second75Selector);
    deleteChildren(thirdStatSelector);

    if (currentchar.decisions.name){
        nameSelector.value = currentchar.decisions.name;
    }else{
        return;
    }
    if (currentchar.decisions.faction){
        createFactionSelector();
    }else{
        return;
    }
    if (currentchar.decisions.archetype){
        createArchetypeSelector();
    }else{
        return;
    }
    if (currentchar.decisions.firstcapacity){
        createFirstCapacitySelector();
    }else{
        return;
    }
    if (currentchar.decisions.firstspells){
        spellSelectors.forEach(spellSelector => {
            createSpellSelector(spellSelector);
          });
    }else{
        return;
    }
    if (currentchar.decisions.pts25first){
        createFirst25Selector();
    }else{
        return;
    }
    if (currentchar.decisions.pts25second){
        createSecond25Selector();
    }else{
        return;
    }
    if (currentchar.decisions.firststat){
        createStatSelector(firstStatSelector, "firststat");
    }else{
        return;
    }
    if (currentchar.decisions.pts50first){
        createFirst50Selector();
    }else{
        return;
    }
    if (currentchar.decisions.pts50second){
        createSecond50Selector();
    }else{
        return;
    }
    if (currentchar.decisions.secondstat){
        createStatSelector(secondStatSelector, "secondstat");
    }else{
        return;
    }
    if (currentchar.decisions.pts75first){
        createFirst75Selector();
    }else{
        return;
    }
    if (currentchar.decisions.pts75second){
        createSecond75Selector();
    }else{
        return;
    }
    if (currentchar.decisions.thirdstat){
        createStatSelector(thirdStatSelector, "thirdstat");
    }else{
        return;
    }

}

  
        
      
 