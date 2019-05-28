
createFactionSelector();

document.addEventListener("select:name", function(){
  if (currentchar.card.level != 0){
    deleteChildren(first25Selector);
    createFirst25Selector();
  }
});

document.addEventListener("select:faction", function(){
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
  
  createArchetypeSelector();
});
  
document.addEventListener("select:archetype", function() {  
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

  createFirstCapacitySelector();

  spellSelectors.forEach(spellSelector => {
    createSpellSelector(spellSelector);
  });
});

document.addEventListener("select:spell", function(){

  spellSelectors.forEach(spellSelector => {
    updateSpellSelector(spellSelector);
  });

  if (currentchar.card.level != 0){
    deleteChildren(first25Selector);
    createFirst25Selector();
  }
});

document.addEventListener("select:capacity", function(){

  if (currentchar.card.level != 0){
    deleteChildren(first25Selector);
    createFirst25Selector();
  }
});


document.addEventListener("select:first25", function(){
  deleteChildren(second25Selector);
  deleteChildren(firstStatSelector);
  deleteChildren(first50Selector);
  deleteChildren(second50Selector);
  deleteChildren(secondStatSelector);
  deleteChildren(first75Selector);
  deleteChildren(second75Selector);
  deleteChildren(thirdStatSelector);

  createSecond25Selector();
});

document.addEventListener("select:second25", function(){
  deleteChildren(firstStatSelector);
  deleteChildren(first50Selector);
  deleteChildren(second50Selector);
  deleteChildren(secondStatSelector);
  deleteChildren(first75Selector);
  deleteChildren(second75Selector);
  deleteChildren(thirdStatSelector);

  createStatSelector(firstStatSelector, "firststat");
});

document.addEventListener("select:firststat", function(){
  deleteChildren(first50Selector);
  deleteChildren(second50Selector);
  deleteChildren(secondStatSelector);
  deleteChildren(first75Selector);
  deleteChildren(second75Selector);
  deleteChildren(thirdStatSelector);

  create50Selectors();
});

document.addEventListener("select:first50", function(){
  deleteChildren(secondStatSelector);
  deleteChildren(first75Selector);
  deleteChildren(second75Selector);
  deleteChildren(thirdStatSelector);

  if (currentchar.decisions.pts50second){
    createStatSelector(secondStatSelector, "secondstat");
  }
});

document.addEventListener("select:second50", function(){
  deleteChildren(secondStatSelector);
  deleteChildren(first75Selector);
  deleteChildren(second75Selector);
  deleteChildren(thirdStatSelector);
  if (currentchar.decisions.pts50first){
    createStatSelector(secondStatSelector, "secondstat");
  }
});

document.addEventListener("select:secondstat", function(){
  deleteChildren(first75Selector);
  deleteChildren(second75Selector);
  deleteChildren(thirdStatSelector);

  createFirst75Selector();
});

document.addEventListener("select:first75", function(){
  deleteChildren(second75Selector);
  deleteChildren(thirdStatSelector);

  createSecond75Selector();
});

document.addEventListener("select:second75", function(){
  deleteChildren(thirdStatSelector);
  createStatSelector(thirdStatSelector, "thirdstat");
});






