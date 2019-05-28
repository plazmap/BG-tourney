
//Delete all child nodes when needed.
var nameSelector = document.querySelector("#name-selector");
var factionSelector = document.querySelector(".faction-selector");
var archetypeSelector = document.querySelector(".archetype-selector");
var capacitySelector = document.querySelector(".capacity-selector");
var spellSelectors = document.querySelectorAll(".spell-selector");
var first25Selector = document.querySelector(".pts25-1selector");
var second25Selector = document.querySelector(".pts25-2selector");
var firstStatSelector = document.querySelector(".stat-1selector");
var first50Selector = document.querySelector(".pts50-1selector");
var second50Selector = document.querySelector(".pts50-2selector");
var secondStatSelector = document.querySelector(".stat-2selector");
var first75Selector = document.querySelector(".pts75-1selector");
var second75Selector = document.querySelector(".pts75-2selector");
var thirdStatSelector = document.querySelector(".stat-3selector");


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
  });
  
  document.addEventListener("select:second25", function(){
    deleteChildren(firstStatSelector);
    deleteChildren(first50Selector);
    deleteChildren(second50Selector);
    deleteChildren(secondStatSelector);
    deleteChildren(first75Selector);
    deleteChildren(second75Selector);
    deleteChildren(thirdStatSelector);
  });
  
  document.addEventListener("select:firststat", function(){
    deleteChildren(first50Selector);
    deleteChildren(second50Selector);
    deleteChildren(secondStatSelector);
    deleteChildren(first75Selector);
    deleteChildren(second75Selector);
    deleteChildren(thirdStatSelector);
  });

  document.addEventListener("select:first50", function(){
    deleteChildren(secondStatSelector);
    deleteChildren(first75Selector);
    deleteChildren(second75Selector);
    deleteChildren(thirdStatSelector);
  });

  document.addEventListener("select:second50", function(){
    deleteChildren(secondStatSelector);
    deleteChildren(first75Selector);
    deleteChildren(second75Selector);
    deleteChildren(thirdStatSelector);
  });

  document.addEventListener("select:secondstat", function(){
    deleteChildren(first75Selector);
    deleteChildren(second75Selector);
    deleteChildren(thirdStatSelector);
  });

  document.addEventListener("select:first75", function(){
    deleteChildren(second75Selector);
    deleteChildren(thirdStatSelector);
  });

  document.addEventListener("select:second75", function(){
    deleteChildren(thirdStatSelector);
  });






