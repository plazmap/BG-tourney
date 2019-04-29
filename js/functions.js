//Create usefull function in order to delete all child nodes for selectors.
  
  function deleteChildren(selector){
    var selector = document.querySelector("#"+selector);
     while (selector.firstChild) {
         selector.removeChild(selector.firstChild);
     }
  }