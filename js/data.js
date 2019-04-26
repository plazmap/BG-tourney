

var dataFactions = [
    "Cryx",
    "Cygnar",
    "Khador"
  ];
  
  var dataCharTypes = {
    "Cryx": ["Pirate", "Lich", "Sorcerer"],
    "Cygnar": ["Arcanist", "Combattant", "Gun Mage"],
    "Khador": ["Koldun", "ManHunter", "Manowar"]
  };

  var dataSpells = {
          "Pirate" : ["Admonition", "Bleed", "Carnage", "Ghost Walk", "Grave Wind", "Infernal Machine", "Occultation", "Scything Touch"],
          "Lich" : ["Blood Rain", "Curse of Shadows", "Ghost Walk", "Hellfire", "Infernal Machine", "Parasite", "Scything Touch", "Stranglehold"],
          "Sorcerer" : ["Crippling Grasp", "Ghost Walk", "Hellfire", "Infernal Machine", "Occultation", "Scything Touch", "Vanish", "Venom"],
          "Arcanist" : ["Arcane Blast", "Arcane Bolt", "Arcane Shield", "Blur", "Chain Lightning", "Lightning Shroud", "Mage Sight", "Polarity Shield"],
          "Combattant" : ["Arcane Bolt", "Arcane Shield", "Blur", "Deadeye", "Mage Sight", "Positive Charge", "Rebuke", "Snipe"],
          "Gun Mage" : ["Arcane Bolt", "Blur", "Calamity", "Deadeye", "Energizer", "Fire Group", "Mage Sight", "Snipe"],
          "Koldun" : ["Boundless Charge", "Freezing Mist", "Frost Hammer", "Fury", "Ghost Walk", "Iron Flesh", "Razor Wind", "Wind Wall"],
          "ManHunter" : ["Boundless Charge", "Energizer", "Fury", "Iron Flesh", "Occultation", "Quicken", "Razor Wind", "Wind Rush"],
          "Manowar" : ["Arcane Might", "Boundless Charge", "Energizer", "Fury", "Iron Flesh", "Razor Wind", "Solid Ground", "Superiority"]
  }


  var data = {
    "faction": {
      "cryx": {
        "name": "Cryx Empire",
        "archetypes": {
          "pirate": {
            "name": "Pirate",
            "spelllist": ["Admonition", "Bleed", "Carnage", "Ghost Walk", "Grave Wind", "Infernal Machine", "Occultation", "Scything Touch"],
            "stats": {
              "initialstats":{
                "SPD":"6",
                "STR":"5",
                "MAT":"6",
                "RAT":"6",
                "DEF":"16",
                "ARM":"15",
                "CMD":"8",
                "FOCUS":"4"
              },
              "secondstats":{
                "SPD":"7",
                "STR":"6",
                "MAT":"7",
                "RAT":"7",
                "DEF":"17",
                "ARM":"16",
                "CMD":"9",
                "FOCUS":"5"
              },
              "thirdstats":{
                "SPD":"none",
                "STR":"7",
                "MAT":"8",
                "RAT":"8",
                "DEF":"18",
                "ARM":"17",
                "CMD":"10",
                "FOCUS":"6"
              }
            },
            "initialweapons":{
              "cutlass":{
                "name":"Cutlass",
                "type":"melee",
                "RNG":"0.5",
                "POW":"3",
                "PS":"12"
              },
              "hand cannon":{
                "name":"Hand Cannon",
                "type":"range",
                "RNG":"12",
                "ROF":"1",
                "AOE":"none",
                "POW":"12"
               }
            },
              "initialcapas":{
                "point blank":{
                "name":"Point Blank",
                  "description":"Dans son activation, le Pirate peut faire une attaque de mêlée avec son arme distance, avec une zone de mêlée de 0,5''. Ne pas ajouter la STR au POW. Pas de dommages boostés en charge."
                },
                "steady":{
                  "name":"Steady",
                  "description":"le Pirate ne peut pas être mis au tapis"
                }
              } 
              
            }
        }
      }
    }
  }