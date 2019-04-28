var constructor = document.querySelector(".constructor");
var selectors = constructor.querySelectorAll(".selector");
console.log(selectors);
selectors.forEach(selector => {
    selector.addEventListener("mouseover", function(e) {
        console.log("plop");
      });
});

var constructor = document.querySelector(".constructor");
var options = constructor.querySelectorAll("option");
console.log(options);
options.forEach(option => {
    option.addEventListener("mouseover", function(e) {
       console.log("plop");
    });
});





