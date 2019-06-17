//Create usefull function in order to delete all child nodes for selectors.
//Argument can be string, html object or html objects array.
 
function deleteChildren(selector){
  if (typeof(selector) === "string"){
    var selectors = document.querySelectorAll(selector);
    selectors.forEach(select => {
      while (select.firstChild) {
        select.removeChild(select.firstChild);
      }
    });
  // }else if (selector[0]){
  //     selector.forEach(select => {
  //       while (select.firstChild) { 
  //         select.removeChild(select.firstChild);
  //       }    
  //     });
  } else {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }   
  }
}

