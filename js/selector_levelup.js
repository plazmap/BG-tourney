var upgradeStats = ["MAT","RAT","DEF","ARM"];

document.addEventListener("select:capacity", function(e) {
    if (currentchar.level != 0){
        createFirst25Selector();
    }
});
document.addEventListener("select:spell", function(e) {
    if (currentchar.level != 0){
        createFirst25Selector();
    }
});
document.addEventListener("select:name", function(e) {
    if (currentchar.level != 0){
        createFirst25Selector();
    }
});

//25 pts selector

function createFirst25Selector(){
    var opt1 = document.createElement("option");
    opt1.appendChild(document.createTextNode("Please select spell or capacity"));
    opt1.setAttribute ("hidden", "hidden");
    opt1.setAttribute ("disabled", "disabled");
    opt1.setAttribute ("selected", "selected");
    first25Selector.appendChild(opt1);
    var opt2 = document.createElement("option");
    opt2.appendChild(document.createTextNode("New spell"));
    opt2.value = "spell";
    first25Selector.appendChild(opt2);
    var opt3 = document.createElement("option");
    opt3.appendChild(document.createTextNode("New capacity"));
    opt3.value = "capacity";
    first25Selector.appendChild(opt3);
}



first25Selector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:first25",{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    first25Selector.dispatchEvent(event);
});

document.addEventListener("select:first25", function(e) {
    
    var archetypekey = currentchar.archetype;
    var factionkey = currentchar.faction;
    
    if (e.detail.decision == "spell"){
        var spells = data.faction[factionkey].archetypes[archetypekey].spelllist.initial;
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Please select a spell"));
        opt.setAttribute ("hidden", "hidden");
        opt.setAttribute ("disabled", "disabled");
        opt.setAttribute ("selected", "selected");
        second25Selector.appendChild(opt);

        Object.keys(spells).forEach(spellkey => {
            if (!(currentchar.spells.includes(spells[spellkey]))){
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(spells[spellkey]));
                opt.value = spells[spellkey];
                second25Selector.appendChild(opt);
            }
        });
    }else if (e.detail.decision == "capacity"){
        var capacities = data.faction[factionkey].archetypes[archetypekey].capacities.acquired;
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Please select a capacity"));
        opt.setAttribute ("hidden", "hidden");
        opt.setAttribute ("disabled", "disabled");
        opt.setAttribute ("selected", "selected");
        second25Selector.appendChild(opt);

        Object.keys(capacities).forEach(capacitykey => {
            if (!(currentchar.capacities.includes(capacitykey))){
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(capacities[capacitykey].name));
                opt.value = capacitykey;
                second25Selector.appendChild(opt);
            }
        });
    }
});

second25Selector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:second25",{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    second25Selector.dispatchEvent(event);
});

//First stat selector

document.addEventListener("select:second25", function(e){
    
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select one stat"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    firstStatSelector.appendChild(opt);

    upgradeStats.forEach(stat => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(stat));
        opt.value = stat;
        firstStatSelector.appendChild(opt);
    });
});

firstStatSelector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:firststat",{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    firstStatSelector.dispatchEvent(event);
});


//50 points selector

document.addEventListener("select:firststat", function(e){

    var archetypekey = currentchar.archetype;
    var factionkey = currentchar.faction;

    var weapons = data.faction[factionkey].archetypes[archetypekey].weapons.acquired;
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select additionnal spell"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    first50Selector.appendChild(opt);
    Object.keys(weapons).forEach(weaponkey => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(weapons[weaponkey].name));
        opt.value = weaponkey;
        first50Selector.appendChild(opt);
    });

    var feats = data.faction[factionkey].archetypes[archetypekey].feats; 
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select your Feat ! "));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    second50Selector.appendChild(opt);
    Object.keys(feats).forEach(featkey => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(feats[featkey].name));
        opt.value = featkey;
        second50Selector.appendChild(opt);
    });
});

first50Selector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:first50",{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    first50Selector.dispatchEvent(event);
});

second50Selector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:second50",{
        bubbles: true,
        detail: {
            feat: e.target.value
        }
    });
    second50Selector.dispatchEvent(event);
});

//Second stat selector

document.addEventListener("select:second50", function(e){
    
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select one stat"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    secondStatSelector.appendChild(opt);

    upgradeStats.forEach(stat => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(stat));
        opt.value = stat;
        secondStatSelector.appendChild(opt);
    });
});

secondStatSelector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:secondstat",{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    secondStatSelector.dispatchEvent(event);
});


//75 pts selector

document.addEventListener("select:secondstat", function(e){
    var opt1 = document.createElement("option");
        opt1.appendChild(document.createTextNode("Please select spell or capacity"));
        opt1.setAttribute ("hidden", "hidden");
        opt1.setAttribute ("disabled", "disabled");
        opt1.setAttribute ("selected", "selected");
        first75Selector.appendChild(opt1);
        var opt2 = document.createElement("option");
        opt2.appendChild(document.createTextNode("New spell"));
        opt2.value = "spell";
        first75Selector.appendChild(opt2);
        var opt3 = document.createElement("option");
        opt3.appendChild(document.createTextNode("New capacity"));
        opt3.value = "capacity";
        first75Selector.appendChild(opt3);
    });
    
first75Selector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:first75",{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    first75Selector.dispatchEvent(event);
});


document.addEventListener("select:first75", function(e) {
    
    var archetypekey = currentchar.archetype;
    var factionkey = currentchar.faction;
    
    if (e.detail.decision == "spell"){
        var spells = data.faction[factionkey].archetypes[archetypekey].spelllist.initial;
        var spellsextended = data.faction[factionkey].archetypes[archetypekey].spelllist.extended;
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Please select a spell"));
        opt.setAttribute ("hidden", "hidden");
        opt.setAttribute ("disabled", "disabled");
        opt.setAttribute ("selected", "selected");
        second75Selector.appendChild(opt);

        Object.keys(spells).forEach(spellkey => {
            if ((!(currentchar.spells.includes(spells[spellkey])))&&(currentchar.firstdecision!=spells[spellkey])){
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(spells[spellkey]));
                opt.value = spells[spellkey];
                second75Selector.appendChild(opt);
            }
        });
        Object.keys(spellsextended).forEach(spellkey => {
            var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(spellsextended[spellkey]));
                opt.value = spellsextended[spellkey];
                second75Selector.appendChild(opt);
        });


    }else if (e.detail.decision == "capacity"){
        var capacities = data.faction[factionkey].archetypes[archetypekey].capacities.acquired;
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode("Please select a capacity"));
        opt.setAttribute ("hidden", "hidden");
        opt.setAttribute ("disabled", "disabled");
        opt.setAttribute ("selected", "selected");
        second75Selector.appendChild(opt);

        Object.keys(capacities).forEach(capacitykey => {
            if ((!(currentchar.capacities.includes(capacitykey)))&&(currentchar.firstdecision!=capacities[capacitykey])){
                var opt = document.createElement("option");
                opt.appendChild(document.createTextNode(capacities[capacitykey].name));
                opt.value = capacitykey;
                second75Selector.appendChild(opt);
            }
        });
    }
});

second75Selector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:second75",{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    second75Selector.dispatchEvent(event);
});
    
//Third stat selector

document.addEventListener("select:second75", function(e){
    
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Please select one stat"));
    opt.setAttribute ("hidden", "hidden");
    opt.setAttribute ("disabled", "disabled");
    opt.setAttribute ("selected", "selected");
    thirdStatSelector.appendChild(opt);

    upgradeStats.forEach(stat => {
        var opt = document.createElement("option");
        opt.appendChild(document.createTextNode(stat));
        opt.value = stat;
        thirdStatSelector.appendChild(opt);
    });
});

thirdStatSelector.addEventListener("change", function(e){

    var event = new CustomEvent ("select:thirdstat",{
        bubbles: true,
        detail: {
            decision: e.target.value
        }
    });
    thirdStatSelector.dispatchEvent(event);
});
