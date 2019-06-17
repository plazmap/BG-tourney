function selectorUpdate(){
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
    }
    if (currentchar.decisions.faction){
       
    }
}