//Create usefull function in order to delete "please select" options from selectors after first use.

function deleteFirstOption(selector){
    var select = document.querySelector("#"+selector);
    if (select.firstElementChild.value == "error"){
      select.removeChild(select.firstElementChild);
    }
  }
  
  //Create usefull function in order to delete all child nodes for selectors.
  
  function deleteChildren(selector){
    var selector = document.querySelector("#"+selector);
     while (selector.firstChild) {
         selector.removeChild(selector.firstChild);
     }
  }