//Constructor for Casters.

function caster() {
    this.decisions ={
        name:"",
        faction:"",
        archetype:"",
        firstcapacity:"",
        firstspells:[],
        pts25first:"",
        pts25second:"",
        firststat:"",
        pts50first:"",
        pts50second:"",
        secondstat:"",
        pts75first:"",
        pts75second:"",
        thirdstat:""
    }
    this.card ={
        name:"",
        faction:"",
        archetype:"",
        weapons:[],
        capacities:[],
        spells:[],
        feat:"",
        carnage:"",
        perstige:"",
        HP:"",
        socle:"",
        level:"",
        stats:{
            "SPD":"",
            "STR":"",
            "MAT":"",
            "RAT":"",
            "DEF":"",
            "ARM":"",
            "CMD":"",
            "FOC":""
        }
    }
    this.cardUpdate = function(){
       
        this.card.name = this.decisions.name;
        this.card.faction= this.decisions.faction;
        this.card.archetype = this.decisions.archetype;

        this.card.weapons = [];
        if (currentchar.decisions.archetype){
            data.factions[this.decisions.faction].archetypes[this.decisions.archetype].weapons.initial.forEach(weaponkey => {
                this.card.weapons.push(weaponkey);
            });
            if (this.decisions.pts50first){
                this.card.weapons.push(this.decisions.pts50first);
            }
        }

        this.card.capacities = [];
        
        if (currentchar.decisions.archetype){
            data.factions[this.decisions.faction].archetypes[this.decisions.archetype].capacities.initial.forEach(capacitykey => {
                this.card.capacities.push(capacitykey);
            });
            if (this.decisions.firstcapacity){
                this.card.capacities.push(this.decisions.firstcapacity);
            }
            if ((this.decisions.pts25first == "capacity")&&(this.decisions.pts25second)){
                this.card.capacities.push(this.decisions.pts25second);
            }
            if ((this.decisions.pts75first == "capacity")&&(this.decisions.pts75second)){
                this.card.capacities.push(this.decisions.pts75second);
            }
        }

        this.card.spells = [];
        this.decisions.firstspells.forEach(spellkey => {
            this.card.spells.push(spellkey);
        });
        
        if ((this.decisions.pts25first == "spell")&&(this.decisions.pts25second)){
            this.card.spells.push(this.decisions.pts25second);
        }
        if ((this.decisions.pts75first == "spell")&&(this.decisions.pts75second)){
            this.card.spells.push(this.decisions.pts75second);
        }
        
        this.card.feat = this.decisions.pts50second;
        
        if ((currentchar.decisions.name)&&(currentchar.decisions.faction)&&(currentchar.decisions.archetype)&&(currentchar.decisions.firstcapacity)&&(currentchar.decisions.firstspells.length == 3)){
            currentchar.card.level = 1;
        }else {
            currentchar.card.level = 0;
        }
        if (this.decisions.archetype){
            this.card.stats.SPD = parseInt(data.factions[this.decisions.faction].archetypes[this.decisions.archetype].stats.SPD);
            this.card.stats.STR = parseInt(data.factions[this.decisions.faction].archetypes[this.decisions.archetype].stats.STR);
            this.card.stats.MAT = parseInt(data.factions[this.decisions.faction].archetypes[this.decisions.archetype].stats.MAT);
            if (currentchar.decisions.firststat == "MAT"){
                this.card.stats.MAT += 1;
            }
            if (currentchar.decisions.secondstat == "MAT"){
                this.card.stats.MAT += 1;
            }
            if (currentchar.decisions.thirdstat == "MAT"){
                this.card.stats.MAT += 1;
            }
            this.card.stats.RAT = parseInt(data.factions[this.decisions.faction].archetypes[this.decisions.archetype].stats.RAT);
            if (currentchar.decisions.firststat == "RAT"){
                this.card.stats.RAT += 1;
            }
            if (currentchar.decisions.secondstat == "RAT"){
                this.card.stats.RAT += 1;
            }
            if (currentchar.decisions.thirdstat == "RAT"){
                this.card.stats.RAT += 1;
            }
            this.card.stats.DEF = parseInt(data.factions[this.decisions.faction].archetypes[this.decisions.archetype].stats.DEF);
            if (currentchar.decisions.firststat == "DEF"){
                this.card.stats.DEF += 1;
            }
            if (currentchar.decisions.secondstat == "DEF"){
                this.card.stats.DEF += 1;
            }
            if (currentchar.decisions.thirdstat == "DEF"){
                this.card.stats.DEF += 1;
            }
            this.card.stats.ARM = parseInt(data.factions[this.decisions.faction].archetypes[this.decisions.archetype].stats.ARM);
            if (currentchar.decisions.firststat == "ARM"){
                this.card.stats.ARM += 1;
            }
            if (currentchar.decisions.secondstat == "ARM"){
                this.card.stats.ARM += 1;
            }
            if (currentchar.decisions.thirdstat == "ARM"){
                this.card.stats.ARM += 1;
            }
            this.card.stats.CMD = parseInt(data.factions[this.decisions.faction].archetypes[this.decisions.archetype].stats.CMD);
            this.card.stats.FOC = parseInt(data.factions[this.decisions.faction].archetypes[this.decisions.archetype].stats.FOC);
            if (currentchar.decisions.pts25second){
                this.card.stats.FOC += 1;
            }
            if (currentchar.decisions.pts50second){
                this.card.stats.FOC += 1;
            }
            if (currentchar.decisions.pts75second){
                this.card.stats.FOC += 1;
            }
        }
    }
  }
  
//Initiate new caster.

var currentchar = new caster();
currentchar.card.level = 0;

//Update Caster Object every time something is selected.

document.addEventListener("select:name", function(e) {
    currentchar.decisions.name = e.detail.name;
    currentchar.cardUpdate();

});

document.addEventListener("select:faction", function(e) {  
    currentchar.decisions.faction = e.detail.factionkey;
    currentchar.decisions.archetype=undefined;
    currentchar.decisions.firstcapacity=undefined;
    currentchar.decisions.firstspells=[];
    currentchar.decisions.pts25first=undefined;
    currentchar.decisions.pts25second=undefined;
    currentchar.decisions.firststat=undefined;
    currentchar.decisions.pts50first=undefined;
    currentchar.decisions.pts50second=undefined;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:archetype", function(e) {
    currentchar.decisions.archetype = e.detail.archetypekey;
    currentchar.decisions.firstcapacity=undefined;
    currentchar.decisions.firstspells=[];
    currentchar.decisions.pts25first=undefined;
    currentchar.decisions.pts25second=undefined;
    currentchar.decisions.firststat=undefined;
    currentchar.decisions.pts50first=undefined;
    currentchar.decisions.pts50second=undefined;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:capacity", function(e) {
    currentchar.decisions.firstcapacity = e.detail.capacitykey;
    currentchar.decisions.pts25first=undefined;
    currentchar.decisions.pts25second=undefined;
    currentchar.decisions.firststat=undefined;
    currentchar.decisions.pts50first=undefined;
    currentchar.decisions.pts50second=undefined;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:spell", function(e) {
    currentchar.decisions.firstspells =[];
    var spellSelectors = document.querySelectorAll(".spell-selector");
    spellSelectors.forEach(spellSelector => {
        if (spellSelector.value != "Please select a spell"){
            currentchar.decisions.firstspells.unshift(spellSelector.value);
        }
    })
    currentchar.decisions.pts25first=undefined;
    currentchar.decisions.pts25second=undefined;
    currentchar.decisions.firststat=undefined;
    currentchar.decisions.pts50first=undefined;
    currentchar.decisions.pts50second=undefined;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:first25", function(e) {
    currentchar.decisions.pts25first = e.detail.decision;
    currentchar.decisions.pts25second=undefined;
    currentchar.decisions.firststat=undefined;
    currentchar.decisions.pts50first=undefined;
    currentchar.decisions.pts50second=undefined;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:second25", function(e) {
    currentchar.decisions.pts25second = e.detail.decision;
    currentchar.decisions.firststat=undefined;
    currentchar.decisions.pts50first=undefined;
    currentchar.decisions.pts50second=undefined;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:firststat", function(e) {
    currentchar.decisions.firststat = e.detail.decision;
    currentchar.decisions.pts50first=undefined;
    currentchar.decisions.pts50second=undefined;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:first50", function(e) {
    currentchar.decisions.pts50first = e.detail.decision;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:second50", function(e) {
    currentchar.decisions.pts50second = e.detail.decision;
    currentchar.decisions.secondstat=undefined;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:secondstat", function(e) {
    currentchar.decisions.secondstat = e.detail.decision;
    currentchar.decisions.pts75first=undefined;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:first75", function(e) {
    currentchar.decisions.pts75first = e.detail.decision;
    currentchar.decisions.pts75second=undefined;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:second75", function(e) {
    currentchar.decisions.pts75second = e.detail.decision;
    currentchar.decisions.thirdstat=undefined;
    currentchar.cardUpdate();
});

document.addEventListener("select:thirdstat", function(e) {
    currentchar.decisions.thirdstat = e.detail.decision;
    currentchar.cardUpdate();
});





