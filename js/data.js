var data ={
    "factions": {
        "cryx": {
            "name": "Cryx Empire",
            "description": "The good guyz. If you disagree, you can't handle the thruth bruh.",
            "archetypes": {
                "pirate": {
                    "name": "Pirate",
                    "description": "Bad ass pirate goes \"yaaaar\". Black powder and rhum included.",
                    "spelllist":{
                        "initial":["admonition", "bleed", "carnage", "ghost walk", "grave wind", "infernal machine", "occultation", "scything touch"],
                        "extended":["dash","deceleration","death ward", "hex blast", "telekenis"]
                    }, 
                    "hp":"8",
                    "stats": {
                        "SPD":"6",
                        "STR":"5",
                        "MAT":"6",
                        "RAT":"6",
                        "DEF":"16",
                        "ARM":"15",
                        "CMD":"8",
                        "FOC":"4"
                    },
                    "feats":["boarding action","charge des damnés","recalibration"],
                    "weapons":{
                        "initial":["cutlass","hand cannon"],
                        "acquired":["blood blade","vicious blade","heavy riffle"]
                    },
                    "capacities":{
                        "initial":["point blank","steady"],
                        "acquired":["leadership finisher","leadership grievious wounds","jump","sprint","stealth"]                                
                    }
                },
                "liche": {
                    "name": "Iron Lich",
                    "description":"Immortal giant half-mechanical badass, who slings spells.",
                    "spelllist":{
                        "initial":["blood rain", "curse of shadows", "ghost walk", "hellfire", "infernal machine", "parasite", "scything touch", "stranglehold"],
                        "extended":["death ward","excarnate","hex blast", "mortality", "soul gate"]
                    }, 
                    "hp":"8",
                    "stats": {
                        "SPD":"6",
                        "STR":"7",
                        "MAT":"5",
                        "RAT":"5",
                        "DEF":"13",
                        "ARM":"17",
                        "CMD":"8",
                        "FOC":"5"
                    },
                    "feats":["dragon's call","moisson macabre","web of shadow"],
                    "weapons":{
                        "initial":["claw"],
                        "acquired":["blood blade","vicious blade","necromantic blade"]  
                    },
                    "capacities":{
                        "initial":["soul taker cull soul","undead"],
                        "acquired":["leadership dark shroud","leadership steady undead","flank undead","sacrificial pawn faction warrior","shadow of death"]
                    }
                },
                "sorcier": {
                    "name": "Sorcier",
                    "description":"Likes your soul. Yummy.",
                    "spelllist":{
                        "initial":["crippling grasp", "ghost walk", "hellfire", "infernal machine", "occultation", "scything touch", "vanish", "venom"],
                        "extended":["dark guidance, death ward, hex blast, soul gate, telekenesis"]
                    }, 
                    "hp":"8",
                    "stats": {
                        "SPD":"6",
                        "STR":"4",
                        "MAT":"6",
                        "RAT":"5",
                        "DEF":"16",
                        "ARM":"14",
                        "CMD":"8",
                        "FOC":"5"
                    },
                    "feats":["black guate","consuming blight","voile spectral"],
                    "weapons":{
                        "initial":["shadow blade"],
                        "acquired":["blood blade","necromantic blade","necro riffle"]
                    },
                    "capacities":{
                        "initial":["soul taker cull soul"],
                        "acquired":["field marshall ghostly","leadership corrosion","mortal fear","unbinding","stealth"]                                 
                    }
                }
            }
        },
        "cygnar": {
            "name": "Cygnar Empire",
            "description": "Evil imperialists with stupid zappy stuff.",
            "archetypes": {
                "arcaniste": {
                    "name": "Arcanist",
                    "description":"Likes zappy toys, and emo haircuts.",
                    "spelllist":{
                        "initial":["arcane blast", "arcane bolt", "arcane shield", "blur", "chain lightning", "lightning shroud", "mage sight", "polarity shield"],
                        "extended":["deceleration", "full throttle", "telekenesis", "teleport", "thunder strike"]
                    }, 
                    "hp":"8",
                    "stats": {
                        "SPD":"6",
                        "STR":"4",
                        "MAT":"5",
                        "RAT":"5",
                        "DEF":"15",
                        "ARM":"15",
                        "CMD":"8",
                        "FOC":"5"
                    },
                    "feats":["electrical storm","peloton d'execution","powerhouse"],
                    "weapons":{
                        "initial":["mechanica blade","pistol"],
                        "acquired":["mechanica spear","magnum","lightning strike"]
                    },
                    "capacities":{
                        "initial":[],
                        "acquired":["arcane vortex","field marshall immunity electricity ionization","leadership immunity electricity electro leap ","overpower","superconduction"]                           
                    }
                },
                "combattant": {
                    "name": "Combattant",
                    "description":"Sure they can fight. For a couple decades, then it's all ''booohooo I'm old and slow''. Pathetic.",
                    "spelllist":{
                        "initial":["arcane bolt", "arcane shield", "blur", "deadeye", "mage sight", "positive charge", "rebuke", "snipe"],
                        "extended":["deceleration, full throttle", "guided fire", "onslaught", "thunder-strike"]
                    }, 
                    "hp":"8",
                    "stats": {
                        "SPD":"6",
                        "STR":"5",
                        "MAT":"6",
                        "RAT":"6",
                        "DEF":"15",
                        "ARM":"16",
                        "CMD":"8",
                        "FOC":"4"
                    },
                    "feats":["invicibility","peloton d'execution","thundering rage"],
                    "weapons":{
                        "initial":["mechanica blade","hand cannon"],
                        "acquired":["mechanica spear","magnum","steam cannon"]
                    },
                    "capacities":{
                        "initial":[],
                        "acquired":["dig in","field marshall swift hunter","leadership brutal charge","tactitian faction warriors","veteran leader faction warrior"]                           
                    }
                },
                "gun mage": {
                    "name": "Gun Mage",
                    "description":"Great heroes of mankind who enjoys staying as far away as possible from actual fights.",
                    "spelllist":{
                        "initial":["arcane bolt", "blur", "calamity", "deadeye", "energizer", "fire group", "mage sight", "snipe"],
                        "extended":["deceleration", "guided fire", "telekenesis", "teleport", "thunder strike"]
                    }, 
                    "hp":"8",
                    "stats": {
                        "SPD":"6",
                        "STR":"7",
                        "MAT":"5",
                        "RAT":"7",
                        "DEF":"16",
                        "ARM":"14",
                        "CMD":"8",
                        "FOC":"4"
                    },
                    "feats":["light em up","précision fatale","reap the whirlwind"],
                    "weapons":{
                        "initial":["dual magelock pistol"],
                        "acquired":["magelock scattergun","magelock riffle","spellstorm pistol"]
                    },
                    "capacities":{
                        "initial":["gun fighter","attack type black penny"],
                        "acquired":["attack type brutal damage","attack type shadow fire","attack type thunderbolt","field marshall rune shot","leadership true sight"]                            
                    }
                }
            }
        }
    },
    "spells": {
        "admonition":{
            "name":"Admonition",
            "COST":"2",
            "RNG":"6",
            "AOE":"",
            "POW":"",
            "UP":"oui",
            "OFF":"non",
            "description":"Quand une figurine ennemie avance et finit dans les 6'' de la figurine ciblée du battlegroup, la figurine affectée peut immédiatement avancer jusqu'à 3'. Elle ne peut pas être ciblée par des free strikes pendant ce mouvement."
        },
        "bleed":{
            "name":"Bleed",
            "COST":"2",
            "RNG":"8",
            "AOE":"",
            "POW":"10",
            "UP":"non",
            "OFF":"oui",
            "description":"Quand ce sort endommage une figurine vivante, le lanceur peut se retirer d3 points de dommage."
        },
        "carnage":{
            "name":"Carnage",
            "COST":"2",
            "RNG":"SELF",
            "AOE":"CTRL",
            "POW":"",
            "UP":"non",
            "OFF":"non",
            "description":"Les figurines alliées de la Faction gagnent +2 aux jets d'attaque de mêlée contre les ennemis qui sont dans la Zone de Contrôle. Dure 1 turn."
        },
        "ghost walk":{
            "name":"Ghost Walk",
            "COST":"2",
            "RNG":"6",
            "AOE":"",
            "POW":"",
            "UP":"non",
            "OFF":"non",
            "description":"La figurine/unité alliée ciblée gagne Ghostly pendant un turn."
        },
        "grave wind":{
            "name":"Grave Wind",
            "COST":"2",
            "RNG":"6",
            "AOE":"",
            "POW":"",
            "UP":"oui",
            "OFF":"non",
            "description":"La figurine alliée de la Faction gagne +2 DEF et Poltergeist (quand une attaque est ratée contre elle, l'attaquant est poussé de d3'' à l'opposé)."
        },
        "infernal machine":{
            "name":"Infernal Machine",
            "COST":"3",
            "RNG":"6",
            "AOE":"",
            "POW":"",
            "UP":"oui",
            "OFF":"non",
            "description":"Le warjack ciblé du battlegroup gagne Murderous et +2 SPD (il gagne un dé additionnel pour les attaques de mêlée contre un guerrier)."
        },
        "occultation":{
            "name":"Occultation",
            "COST":"2",
            "RNG":"6",
            "AOE":"",
            "POW":"",
            "UP":"oui",
            "OFF":"non",
            "description":"La figurine/unité alliée ciblée gagne Stealth, sauf les figurines hors formation."
        },
        "scything touch":{
            "name":"Scything Touch",
            "COST":"2",
            "RNG":"6",
            "AOE":"",
            "POW":"",
            "UP":"oui",
            "OFF":"non",
            "description":"La figurine alliée de la Faction gagne Dark Shroud (dans sa zone de mêlée, les figurines ennemies subissent -2 ARM)."
        },
        "plop":{
            "name":"",
            "COST":"",
            "RNG":"",
            "AOE":"",
            "POW":"",
            "UP":"",
            "OFF":"",
            "description":""
        }
    },
    "weapons":{
        "cutlass":{
            "name":"Cutlass",
            "type":"melee",
            "RNG":"0.5",
            "POW":"3",
            "PS":"",
            "description":"none"
        },
        "hand cannon":{
            "name":"Hand Cannon",
            "type":"range",
            "RNG":"12",
            "ROF":"1",
            "AOE":"none",
            "POW":"12",
            "description":"none"
        },
        "vicious blade":{
            "name":"Vicious Blade",
            "type":"melee",
            "RNG":"2",
            "POW":"8",
            "PS":"",
            "description":"magical, Sustained Attack (pendant l'activation du porteur, la dernière figurine touchée par cette arme est automatiquement touchée à nouveau par cette arme)"
        },
        "heavy riffle":{
            "name":"Heavy Riffle",
            "type":"range",
            "RNG":"12",
            "ROF":"1",
            "AOE":"none",
            "POW":"12",
            "description":"Ghost Shot (ignore LdV, couvert et dissimulation)"
        },
        "claw":{
            "name":"Claw",
            "type":"melee",
            "RNG":"0.5",
            "POW":"5",
            "PS":"",
            "description":"none"
        },
        "blood blade":{
            "name":"Blood Blade",
            "type":"melee",
            "RNG":"2",
            "POW":"8",
            "PS":"",
            "description":"magical, Life Drinker (quand un ennemi vivant est détruit avec cette arme, le porteur est soigné de d3 points de dommage)"
        },
        "necromantic blade":{
            "name":"Necromantic Blade",
            "type":"melee",
            "RNG":"2",
            "POW":"8",
            "PS":"",
            "description":"magical, Soul Eater (quand un ennemi vivant est détruit avec cette arme, le porteur gagne un compteur soul. Quand le porteur récupère son focus, 1 soul = 1 focus)"
        },"shadow blade":{
            "name":"Shadow Blade",
            "type":"melee",
            "RNG":"2",
            "POW":"6",
            "PS":"",
            "description":"Shadow Bind : une figurine touchée subit -3 DEF et ne peut plus se déplacer sauf pour changer d'orientation"
        },    
        "necro riffle":{
            "name":"Necro-Riffle",
            "type":"range",
            "RNG":"14",
            "ROF":"1",
            "AOE":"none",
            "POW":"10",
            "description":"Psycho Venom (cible vivante ou mortvivante boxée est réorientée et devient un Arc Node)"
        },
        "mechanica blade":{
            "name":"Mechanika Blade",
            "type":"melee",
            "RNG":"0.5",
            "POW":"5",
            "PS":"",
            "description":"Magical."
        },
        "pistol":{
            "name":"Pistol",
            "type":"ranged",
            "RNG":"8",
            "ROF":"1",
            "AOE":"none",
            "POW":"10",
            "description":"none"
        },
        "mechanica spear":{
            "name":"Mechanica Spear",
            "type":"melee",
            "RNG":"2",
            "POW":"7",
            "PS":"",
            "description":"Magical, Reach, Set Defense (une figurine dans l'arc avant du porteur subit -2 aux jets d'attaque de charge, de slam et d'impact) "
        },
        "magnum":{
            "name":"Magnum",
            "type":"ranged",
            "RNG":"10",
            "ROF":"2",
            "AOE":"none",
            "POW":"12",
            "description":"Cause la disruption, magique."
        },
        "lightning strike":{
            "name":"Lightning Strike",
            "type":"ranged",
            "RNG":"CTRL",
            "ROF":"1",
            "AOE":"none",
            "POW":"12",
            "description":"Electrical. 1d3 Electro-Leaps."
        },
        "steam cannon":{
            "name":"Steam Cannon",
            "type":"ranged",
            "RNG":"12",
            "ROF":"1",
            "AOE":"4",
            "POW":"14",
            "description":""
        },
        "dual magelock pistol":{
            "name":"Dual Magelock Pistol",
            "type":"ranged",
            "RNG":"10",
            "ROF":"2",
            "AOE":"none",
            "POW":"10",
            "description":"Magical."
        },
        "magelock scattergun":{
            "name":"Magelock Scattergun",
            "type":"ranged",
            "RNG":"SP8",
            "ROF":"1",
            "AOE":"none",
            "POW":"12",
            "description":"Magical."
        },
        "magelock riffle":{
            "name":"Magelock Riffle",
            "type":"ranged",
            "RNG":"14",
            "ROF":"1",
            "AOE":"none",
            "POW":"12",
            "description":"magical, Marksman (choisit la colonne / branche sur WB / WJ) Arcane Precision (ignore Stealth si visée)."
        },
        "spellstorm pistol":{
            "name":"Spellstorm Pistol",
            "type":"ranged",
            "RNG":"12",
            "ROF":"2",
            "AOE":"none",
            "POW":"12",
            "description":"Magical"
        }
    },
    "feats":{
        "boarding action":{
            "name":"Boarding Action",
            "description":"Le Gun Mage gagne True Sight : il ignore les effets de nuée pour déterminer ses lignes de vue. Il ignore aussi Stealth. Tant qu'ils se trouvent dans la portée de commandement du Gun Mage, les guerriers alliés de la Faction gagnent eux aussi True Sight."
        },
        "charge des damnés":{
            "name":"Charge des Damnés",
            "description":"Toutes les figurines/unités alliées de la Faction qui commencent leur activation dans la Zone de Contrôle gagnent Ghostly, +2'' de mouvement en charge et +2 aux jets d'attaque de charge jusqu'à la fin du turn."
        },
        "recalibration":{
            "name":"Recalibration",
            "description":"Tant qu'ils sont dans la Zone de Contrôle, les figurines alliées de la Faction peuvent relancer les jets d'attaques et les jets de dommages pendant ce tour. Chaque jet ne peut être relancé qu'une fois par l'effet de Recalibration."
        },
        "light em up":{
            "name":"Light'Em Up",
            "description":"Tant qu'ils sont dans la Zone de Contrôle, les armes de mêlée et les armes à distance des figurines alliées de la Faction gagnent Beacon et Flare. (une figurine affectée par Beacon peut être chargée/slammée sans dépenser de focus et avec +2'' en mouvement. Une figurine affectée par Flare perd Stealth et subit -2 en DEF pendant un turn)"
        },
        "précision fatale":{
            "name":"Précision Fatale",
            "description":"Tous les membres du battlegroup à l’intérieur de la Zone de Contrôle gagnent Armor Piercing sur la première prochaine touche directe en attaque à distance au cours de ce turn. (ARM de base divisée par 2)"
        },
        "reap the whirlwind":{
            "name":"Reap the Whirlwind",
            "description":"Tant qu'ils sont dans la Zone de Contrôle, les figurines du battlegroup gagnent un bonus cumulatif de +1 sur les jets d'attaque à distance et de dommages à distance pour chaque autre figurine du battlegroup qui a touché un ennemi ce turn avec une attaque à distance (maximum : +3)."
        },
        "invicibility":{
            "name":"Invicibility",
            "description":"Tant qu'elles sont dans la Zone de Contrôle, les figurines alliées de la Faction gagnent +5 ARM pendant un round."
        },
        "thundering rage":{
            "name":"Thundering Rage",
            "description":"Tant qu'ils sont dans la Zone de Contrôle, les armes de mêlée des figurines alliées de la Faction gagnent +3 POW et Beat Back jusqu'à la fin du turn. (Immédiatement après une attaque de mêlée de base pendant l'Action de Combat, une figurine ennemie touchée peut être poussée de 1'' à l'opposé de l'attaquant. Après que l'ennemi soit poussé, l'attaquant peut avancer de 1'' droit vers lui."
        },
        "electrical storm":{
            "name":"Electrical Storm",
            "description":"Les warjacks et les warbeasts ennemis actuellement dans la Zone de Contrôle subissent un jet de dommages électriques POW 14 boostable. Ces dommages sont simultanés. Les warjacks ainsi endommagés subissent la Disruption."
        },
        "peloton d'execution":{
            "name":"Peloton d'Exécution",
            "description":"Toutes les figurines alliées à l’intérieur de la Zone de Contrôle gagnent Snipe et True Sight jusqu’à la fin du turn. (Les figurines affectées gagnent +4 RNG, ignorent les effets de nuée pour les lignes de vue et ignorent Stealth)"
        },
        "powerhouse":{
            "name":"Powerhouse",
            "description":"Tant qu'ils sont dans la Zone de Contrôle, les figurines alliées de la Faction gagnent Immunity Electricity et Parry. Les armes de mêlée des figurines affectées gagnent RNG 2 et Electro-leap."
        },
        "black guate":{
            "name":"Black Guate",
            "description":"Tant qu'elles sont dans la Zone de Contrôle, les figurines alliées de la Faction gagnent des jets d'attaques magiques boostés. Quand le Sorcier lance un sort, son COST est diminué de 1. Quand une figurine ennemie lance un sort en étant dans la Zone de Contrôle du Sorcier, elle augmente son COST de 1. Black Gate dure un round."
        },
        "consuming blight":{
            "name":"Consuming Blight",
            "description":"Les figurines ennemies actuellement dans la Zone de Contrôle subissent un jet de dommage POW 7 non-boostable. Ces jets de dommage sont simultanés. Le Sorcier gagne jusqu'à 7 points de focus, mais Il ne peut pas avoir plus de points de focus que sa valeur actuelle de FOCUS."
        },
        "voile spectral":{
            "name":"Voile Spectral",
            "description":"A la fin du turn, toutes les figurines/unités alliées de la Faction dans la Zone de Contrôle gagnent le concealment et Incorporeal jusqu'à la fin du turn adverse."
        },
        "dragon's call":{
            "name":"Dragon's Call",
            "description":"Quand une figurine vivante ennemie est détruite dans sa Zone de Contröle, la Liche gagne un jeton d'âme. La Liche gagne +1 ARM pour chaque jeton d'âme sur elle. Dragon's Call dure un round."
        },
        "moisson macabre":{
            "name":"Moisson Macabre",
            "description":"Toutes les figurines alliées qui détruisent une figurine ennemie vivante en se trouvant à l’intérieur de la Zone de Contrôle gagnent un jeton cadavre. A la fin du tour, retirez tous les jetons cadavre situés dans la Zone de Contrôle et pour chaque jeton replacez en jeu une figurine de troupier mort-vivant. Cette figurine doit être à l’intérieur de la Zone de Contrôle et en formation avec son unité."
        },
        "web of shadow":{
            "name":"Web of Shadow",
            "description":"Choisissez d3+3 figurines alliées non-warcaster dans la Zone de Contrôle, Ces figurines deviennent Incorporelles pendant un round."
        }
    },
    "capacities":{
        "point blank":{
            "name":"Point Blank",
            "description":"Dans son activation, le Pirate peut faire une attaque de mêlée avec son arme distance, avec une zone de mêlée de 0,5''. Ne pas ajouter la STR au POW. Pas de dommages boostés en charge."
        },
        "steady":{
            "name":"Steady",
            "description":"le Pirate ne peut pas être mis au tapis"
        },
        "leadership finisher":{
            "name":"Leadership : Finisher",
            "description":"Le Pirate gagne Finisher : il gagne un dé additionnel sur ses jets de dommages de mêlée contre des figurines déjà endommagées. Tant qu'ils se trouvent dans la portée de commandement du Pirate, les guerriers alliés de la Faction gagnent eux aussi Finisher sur leurs dommages de mêlée."
        },
        "leadership grievious wounds":{
            "name":"Leasdership : Grievious Wounds",
            "description":"Les armes de mêlée du Pirate gagne Grievous Wounds : quand une figurine est touchée par une attaque de mêlée du Pirate, pendant un round elle perd Tough et ne peut pas retirer de ses dommages. Tant qu'ils se trouvent dans la portée de commandement du Pirate, les guerriers alliés de la Faction gagnent eux aussi Grievous Wounds sur leurs armes de mêlée."     
        },
        "jump":{
            "name":"Jump",
            "description":"Après avoir fait une avance tactique avec son mouvement normal, avant de faire une action, le Pirate peut être placé complètement à l'intérieur de 5'' de sa position courante. Tout effet empêchant la charge empêche aussi le Jump."
        },
        "sprint":{
            "name":"Sprint",
            "description":"A la fin de l'activation du Pirate, s'il a détruit une ou plusieurs figurines ennemies avec des attaques de mêlée pendant cette activation, il peut faire une avance tactique, puis son activation prend fin."
        },
        "stealth":{
            "name":"Stealth",
            "description":"Toute attaque de magie ou à distance ciblant le Pirate dont le point d'origine est à plus de 5'' échoue automatiquement. Le Pirate n'est pas une figurine interférente pour la détermination des lignes de vue des figurines situées à plus de 5''."
        },
        "soul taker cull soul":{
            "name":"Soul Taker : Cull Soul",
            "description":"La Liche gagne un compteur soul pour chaque figurine vivante ennemie détruite à l'intérieur de '' d'elle. Quand la Liche récupère son focus à la Phase de Contrôle suivante, remplacez chaque compteur soul sur la Liche par 1 point de focus."
        },
        "undead":{
            "name":"Undead",
            "description":"La liche n'est pas une figurine vivante."
        },
        "leadership dark shroud":{
            "name":"Leadership : Dark Shroud",
            "description":"La Liche gagne Dark Shroud : tant qu'ils sont dans la zone de mêlée de la Liche, les figurines ennemies subissent -2 ARM.  Tant qu'ils se trouvent dans la portée de commandement de la Liche, les guerriers alliés de la Faction gagnent eux aussi Dark Shroud."
        },
        "leadership steady undead":{
            "name":"Leasdership : Steady + Undead",
            "description":"La Liche gagne Steady. Tant qu'ils se trouvent dans la portée de commandement de la Liche, les guerriers alliés de la Faction gagnent Undead et Steady."
        },
        "flank undead":{
            "name":"Flank : Undead",
            "description":"Quand la Liche fait une attaque de mêlée contre une figurine ennemie qui est elle-même dans la zone de mêlée d'un Undead allié, la Liche gagne +2 sur son jet d'attaque et gagne un dé additionnel de dommages."
        },
        "sacrificial pawn faction warrior":{
            "name":"Sacrificial Pawn [Faction Warrior]",
            "description":"Quand la Liche est touchée par une attaque à distance ennemie, vous pouvez choisir d'avoir un guerrier allié de la Faction à moins de 3'' de la Liche qui soit directement touché à sa place. Le guerrier est automatiquement touché et subit tous les dommages et effets."
        },
        "shadow of death":{
            "name":"Shadows of Death",
            "description":"La Liche gagne Tough.  Tant qu'elles se trouvent dans la portée de commandement de la Liche, les figurines mortes-vivantes alliées de la Faction gagnent Tough."
        },
        "field marshall ghostly":{
            "name":"Field Marshall Ghostly",
            "description":"Les figurines du battlegroup du Sorcier gagnent Ghostly. (Une figurine avec Ghostly peut avancer à travers le terran et les obstacles sans pénalité et peut avancer à travers les obstructions si elle a assez de mouvement pour passer totalement à travers. Une figurine avec Ghostly ne peut pas être ciblée par des free strikes) "
        },
        "leadership corrosion":{
            "name":"Leadership : Corrosion",
            "description":"Les armes de tir et de mêlée du Sorcier provoquent l'effet continu Corrosion. Tant qu'ils se trouvent dans la portée de commandement  du Sorcier, les guerriers alliés de la Faction gagnent eux aussi l'effet continu Corrosion sur leurs armes de tir et de mêlée."     
        },
        "mortal fear":{
            "name":"Mortal Fear 'action spéciale)",
            "description":"Tant qu'elles sont dans la portée de commandement du Sorcier, les figurines vivantes ennemies subissent -2 à leurs jets de dommage. Mortal Fear dure pendant un round."
        },
        "unbinding":{
            "name":"Sprint",
            "description":"Les sorts à entretien ennemis sur les figurines/unités à l'intérieur de 5'' du Sorcier expirent. Les figurines qui contrôlaient ces sorts à entretien subissent d3 points de dommage pour chaque sort qu'elles contrôlaient."
        },
        "arcane vortex":{
            "name":"Arcane Vortex",
            "description":"L'Arcaniste peut annuler immédiatement n'importe quel sort qui le cible ou cible une figurine dans ses 3'' en dépensant 1 point de focus avant que la RNG du sort soit mesurée. Le sort annulé ne prend pas effet, mais son COST reste dépensé."
        },
        "field marshall immunity electricity ionization":{
            "name":"Field Marshall : Immunity Electricity + Ionization",
            "description":"Les figurines du battlegroup de l'Arcaniste gagnent Immunity Electricity et Ionization (Quand une figurine subit un jet de dommages électriques à moins de 5'' d'une figurine avec Ionization, ajouter +2 au jet."
        },
        "leadership immunity electricity electro leap ":{
            "name":"Leadership : Immunity Electricity + Electro-leap ",
            "description":"L'Arcaniste gagne Immunity Electricity et ses armes de mêlée gagnent Electro-leap. Tant qu'ils se trouvent dans la portée de commandement de l'Arcaniste, les guerriers alliés de la Faction gagnent eux aussi Immunity Electricity et leurs armes de mêlée gagnent Electro-leap."
        },
        "overpower":{
            "name":"Overpower",
            "description":"Pendant la Phase de Contrôle, après récupéré son focus mais avant de l'allouer, l'Arcaniste peut dépenser du focus pour augmenter sa Zone de Contrôle de 1'' par point de focus dépensé, pendant un round."
        },
        "superconduction":{
            "name":"Superconduction",
            "description":"Quand une figurine alliée de la Faction tire avec une arme faisant des dommages électriques sur une figurine ennemie se trouvant dans la portée de commandement de l'Arcaniste, la figurine attaquante gagne +2 à son jet d'attaque."
        },
        "dig in":{
            "name":"Dig In",
            "description":"Le Combattant gagne cover, ignore les dommages de blast et ne bloque pas les lignes de vue jusqu'à ce qu'il bouge, soit placé ou soit engagé. Le Combattant peut commencer la partie en profitant de ces effets."
        },
        "field marshall swift hunter":{
            "name":"Field Marshall : Swift Hunter",
            "description":"Les figurines du battlegroup du Combattant gagnent Swift Hunter. (Quand une figurine avec Swift Hunter détruit une figurine ennemie ou plus avec une attaque à distance de base, immédiatement après la résolution de l'attaque, elle peut avancer jusqu'à 2'')."
        },
        "leadership brutal charge":{
            "name":"Leadership : Brutal Charge",
            "description":"Le Combattant gagne Brutal Charge avec ses armes de mêlée : il gagne +2 aux jets de dommages des attaques de charge avec une de ses armes de mêlée. Tant qu'ils se trouvent dans la portée de commandement du Combattant, les guerriers alliés de la Faction gagnent eux aussi Brutal Charge."
        },
        "tactician faction warrior":{
            "name":"Tactitian [Faction Warriors]",
            "description":"Tant qu'ils se trouvent dans la portée de commandement du Combattant, les guerriers alliés de la Faction peuvent ignorer les autres guerriers alliés de la Faction pour déterminer les lignes de vue. Ils peuvent traverser les autres guerriers alliés de la Faction s'ils peuvent les dépasser totalement."
        },
        "veteran leader faction warrior":{
            "name":"Veteran Leader [Faction Warrior]",
            "description":"Tant qu'ils se trouvent dans la portée de commandement du Combattant, les autres guerriers alliés de la Faction gagnent +1 à leurs jets d'attaque."
        },
        "gun fighter":{
            "name":"Gun Fighter",
            "description":"Le Gun Mage a une zone de mêlée de 0,5'' et peut faire des attaques à distance ciblant des figurines avec qui il est en mêlée."
        },
        "attack type black penny":{
            "name":"Attack Type - Black Penny",
            "description":"Quand le Gun Mage attaque avec une arme de tir, il peut choisir un des Attack Type dont il dispose. S'il choisit Black Penny, il ignore le bonus de DEF d'une cible en mêlée."
        },
        "attack type brutal damage":{
            "name":"Attack Type - Brutal Damage",
            "description":"Si le Gun Mage choisit cet Attack Type lors d'une attaque à distance, il gagne un dé additionnel à ses jets de dégâts lors d'une touche directe.."
        },
        "attack type shadow fire":{
            "name":"Attack Type - Shadow Fire",
            "description":"Si le Gun Mage choisit cet Attack Type lors d'une attaque à distance, une figurine touchée ne bloque plus les lignes de vue pendant un turn."
        },
        "attack type thunderbolt":{
            "name":"Attack Type - Thunderbolt",
            "description":"Si le Gun Mage choisit cet Attack Type lors d'une attaque à distance, une figurine ennemie touchée est poussée de 1d3'' à l'opposé du Gun Mage et elle est mise au tapis après avoir été poussée si la touche est critique."
        },
        "field marshall rune shot":{
            "name":"Field Marshall : Rune Shot",
            "description":"Les attaques à distance des figurines du battlegroup du Gun Mage sont magical."
        },
        "leadership true sight":{
            "name":"Leadership : True Sight",
            "description":"Le Gun Mage gagne True Sight : il ignore les effets de nuée pour déterminer ses lignes de vue. Il ignore aussi Stealth. Tant qu'ils se trouvent dans la portée de commandement du Gun Mage, les guerriers alliés de la Faction gagnent eux aussi True Sight."
        }
    }
}