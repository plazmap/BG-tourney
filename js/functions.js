//Create usefull function in order to delete all child nodes for selectors.
  
function deleteChildren(selector){
  var selectors = document.querySelectorAll(selector);
  selectors.forEach(selector => {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  });
}