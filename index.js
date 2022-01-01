
const axios = require('axios');
let account = require('./account.json').account;
// let cardDict = require('./cards.json');
let accountDetails = [];

cardDict = {
        " 1 " : "Goblin Shaman" ,
        " 2 " : "Giant Roc" ,
        " 3 " : "Kobold Miner" ,
        " 4 " : "Fire Beetle" ,
        " 5 " : "Malric Inferno" ,
        " 6 " : "Serpentine Soldier" ,
        " 7 " : "Pit Ogre" ,
        " 8 " : "Cerberus" ,
        " 9 " : "Fire Demon" ,
        " 10 " : "Serpent of the Flame" ,
        " 11 " : "Elemental Phoenix" ,
        " 12 " : "Pirate Captain" ,
        " 13 " : "Spineback Turtle" ,
        " 14 " : "Crustacean King" ,
        " 15 " : "Sabre Shark" ,
        " 16 " : "Alric Stormbringer" ,
        " 17 " : "Medusa" ,
        " 18 " : "Water Elemental" ,
        " 19 " : "Frozen Soldier" ,
        " 20 " : "Mischievous Mermaid" ,
        " 21 " : "Naga Warrior" ,
        " 22 " : "Frost Giant" ,
        " 23 " : "Flesh Golem" ,
        " 24 " : "Goblin Sorcerer" ,
        " 25 " : "Rexxie" ,
        " 26 " : "Minotaur Warrior" ,
        " 27 " : "Lyanna Natura" ,
        " 28 " : "Earth Elemental" ,
        " 29 " : "Stone Golem" ,
        " 30 " : "Stonesplitter Orc" ,
        " 31 " : "Magi of the Forest" ,
        " 32 " : "Swamp Thing" ,
        " 33 " : "Spirit of the Forest" ,
        " 34 " : "Divine Healer" ,
        " 35 " : "Feral Spirit" ,
        " 36 " : "Silvershield Knight" ,
        " 37 " : "Silvershield Warrior" ,
        " 38 " : "Tyrus Paladium" ,
        " 39 " : "Peacebringer" ,
        " 40 " : "Silvershield Paladin" ,
        " 41 " : "Clay Golem" ,
        " 42 " : "Defender of Truth" ,
        " 43 " : "Air Elemental" ,
        " 44 " : "Angel of Light" ,
        " 45 " : "Animated Corpse" ,
        " 46 " : "Haunted Spider" ,
        " 47 " : "Skeleton Assassin" ,
        " 48 " : "Spineback Wolf" ,
        " 49 " : "Zintar Mortalis" ,
        " 50 " : "Haunted Spirit" ,
        " 51 " : "Twisted Jester" ,
        " 52 " : "Undead Priest" ,
        " 53 " : "Dark Enchantress" ,
        " 54 " : "Screaming Banshee" ,
        " 55 " : "Lord of Darkness" ,
        " 56 " : "Selenia Sky" ,
        " 57 " : "Lightning Dragon" ,
        " 58 " : "Chromatic Dragon" ,
        " 59 " : "Gold Dragon" ,
        " 60 " : "Peaceful Giant" ,
        " 61 " : "Grumpy Dwarf" ,
        " 62 " : "Elven Cutthroat" ,
        " 63 " : "Centaur" ,
        " 64 " : "Cocatrice" ,
        " 65 " : "Cyclops" ,
        " 66 " : "Enchanted Pixie" ,
        " 67 " : "Raging Impaler" ,
        " 68 " : "Magi Sphinx" ,
        " 69 " : "Hydra" ,
        " 70 " : "Talia Firestorm" ,
        " 71 " : "Xia Seachan" ,
        " 72 " : "Xander Foxwood" ,
        " 73 " : "Kiara Lightbringer" ,
        " 74 " : "Jarlax the Undead" ,
        " 75 " : "Dragon Whelp" ,
        " 76 " : "Royal Dragon Archer" ,
        " 77 " : "Shin-Lo" ,
        " 78 " : "Neb Seni" ,
        " 79 " : "Highland Archer" ,
        " 80 " : "Rusty Android" ,
        " 81 " : "Hobgoblin" ,
        " 82 " : "Lord Arianthus" ,
        " 83 " : "Sea Genie" ,
        " 84 " : "Divine Sorceress" ,
        " 85 " : "Mushroom Seer" ,
        " 86 " : "Vampire" ,
        " 87 " : "Flame Imp" ,
        " 88 " : "Daria Dragonscale" ,
        " 89 " : "Sacred Unicorn" ,
        " 90 " : "Wood Nymph" ,
        " 91 " : "Creeping Ooze" ,
        " 92 " : "Phantom Soldier" ,
        " 93 " : "Pirate Archer" ,
        " 94 " : "Naga Fire Wizard" ,
        " 95 " : "Brownie" ,
        " 96 " : "Silvershield Archers" ,
        " 97 " : "Goblin Mech" ,
        " 98 " : "Ruler of the Seas" ,
        " 99 " : "Skeletal Warrior" ,
        " 100 " : "Imp Bowman" ,
        " 101 " : "Crystal Werewolf" ,
        " 102 " : "Javelin Thrower" ,
        " 103 " : "Sea Monster" ,
        " 104 " : "Prismatic Energy" ,
        " 105 " : "Undead Minotaur" ,
        " 106 " : "Exploding Dwarf" ,
        " 107 " : "Manticore" ,
        " 108 " : "Black Dragon" ,
        " 109 " : "Crypt Mancer" ,
        " 110 " : "Plado Emberstorm" ,
        " 111 " : "Valnamor" ,
        " 112 " : "Prince Rennyn" ,
        " 113 " : "The Peakrider" ,
        " 114 " : "Delwyn Dragonscale" ,
        " 115 " : "Dragonling Bowman" ,
        " 116 " : "Fiendish Harpy" ,
        " 117 " : "Red Dragon" ,
        " 118 " : "Armorsmith" ,
        " 119 " : "Silvershield Bard" ,
        " 120 " : "Goblin Chef" ,
        " 121 " : "Minotaur Warlord" ,
        " 122 " : "Electric Eels" ,
        " 123 " : "Mermaid Healer" ,
        " 124 " : "Undead Archer" ,
        " 125 " : "Corrupted Pegasus" ,
        " 126 " : "Molten Ogre" ,
        " 127 " : "Lord of Fire" ,
        " 128 " : "Enchanted Defender" ,
        " 129 " : "Dwarven Wizard" ,
        " 130 " : "Archmage Arius" ,
        " 131 " : "Furious Chicken" ,
        " 132 " : "Fallen Specter" ,
        " 133 " : "Beetle Queen" ,
        " 134 " : "Naga Windmaster" ,
        " 135 " : "Maggots" ,
        " 136 " : "Cursed Slimeball" ,
        " 137 " : "Giant Scorpion" ,
        " 138 " : "Undead Badger" ,
        " 139 " : "Dark Astronomer" ,
        " 140 " : "Bone Golem" ,
        " 141 " : "Death Elemental" ,
        " 142 " : "Soulstorm" ,
        " 143 " : "Darkest Mage" ,
        " 144 " : "Dark Ha'on" ,
        " 145 " : "Contessa L'ament" ,
        " 146 " : "Cave Slug" ,
        " 147 " : "Crystal Jaguar" ,
        " 148 " : "Lone Boatman" ,
        " 149 " : "Herbalist" ,
        " 150 " : "Truthspeaker" ,
        " 151 " : "Luminous Eagle" ,
        " 152 " : "Shieldbearer" ,
        " 153 " : "Light Elemental" ,
        " 154 " : "Thunderbird" ,
        " 155 " : "High Priest Darius" ,
        " 156 " : "Mother Khala" ,
        " 157 " : "Kobold Bruiser" ,
        " 158 " : "Serpentine Spy" ,
        " 159 " : "Magma Troll" ,
        " 160 " : "Goblin Fireballer" ,
        " 161 " : "Fire Elemental" ,
        " 162 " : "Living Lava" ,
        " 163 " : "Spark Pixies" ,
        " 164 " : "Ferexia General" ,
        " 165 " : "Pyromaniac" ,
        " 166 " : "Magnor" ,
        " 167 " : "Pyre" ,
        " 168 " : "Feasting Seaweed" ,
        " 169 " : "Albatross" ,
        " 170 " : "Tortisian Fighter" ,
        " 171 " : "Sniping Narwhal" ,
        " 172 " : "Ice Pixie" ,
        " 173 " : "Giant Squid" ,
        " 174 " : "Serpent of Eld" ,
        " 175 " : "Coral Wraith" ,
        " 176 " : "Azmare Harpoonist" ,
        " 177 " : "Phantom of the Abyss" ,
        " 178 " : "Bortus" ,
        " 179 " : "Goblin Thief" ,
        " 180 " : "Failed Summoner" ,
        " 181 " : "Biceratops" ,
        " 182 " : "Orc Sergeant" ,
        " 183 " : "Khmer Princess" ,
        " 184 " : "Unicorn Mustang" ,
        " 185 " : "Child of the Forest" ,
        " 186 " : "Mitica Headhunter" ,
        " 187 " : "Sporcerer" ,
        " 188 " : "Kron the Undying" ,
        " 189 " : "Wizard of Eastwood" ,
        " 190 " : "Elven Defender" ,
        " 191 " : "Horny Toad" ,
        " 192 " : "Mantoid" ,
        " 193 " : "Parasitic Growth" ,
        " 194 " : "Elven Mystic" ,
        " 195 " : "Goblin Chariot" ,
        " 196 " : "Tower Griffin" ,
        " 197 " : "War Chaang" ,
        " 198 " : "Tortisian Chief" ,
        " 199 " : "Cornealus" ,
        " 200 " : "Camila Sungazer" ,
        " 201 " : "The Vigilator" ,
        " 202 " : "Scale Doctor" ,
        " 203 " : "Dragon Jumper" ,
        " 204 " : "Gloridax Magus" ,
        " 205 " : "Prince Julian" ,
        " 206 " : "Boogeyman" ,
        " 207 " : "Spirit Miner" ,
        " 208 " : "Battle Orca" ,
        " 209 " : "Chain Golem" ,
        " 210 " : "Diamond Dragon" ,
        " 211 " : "Gloridax Guardian" ,
        " 212 " : "Fire Spitter" ,
        " 213 " : "The Kraken" ,
        " 214 " : "Ettin Spearman" ,
        " 215 " : "Octopider" ,
        " 216 " : "Silvershield Assassin" ,
        " 217 " : "Baby Unicorn" ,
        " 218 " : "Gelatinous Cube" ,
        " 219 " : "Gremlin Blaster" ,
        " 220 " : "Screeching Vulture" ,
        " 221 " : "Spirit Shaman" ,
        " 222 " : "Zalran Efreet" ,
        " 223 " : "Serpentine Mystic" ,
        " 224 " : "Drake of Arnak" ,
        " 225 " : "Barking Spider" ,
        " 226 " : "Nectar Queen" ,
        " 227 " : "Flame Monkey" ,
        " 228 " : "Pyromancer" ,
        " 229 " : "Undead Rexx" ,
        " 230 " : "Shadowy Presence" ,
        " 231 " : "Torhilo the Frozen" ,
        " 232 " : "Wave Runner" ,
        " 233 " : "Warrior of Peace" ,
        " 234 " : "Evangelist" ,
        " 235 " : "Mimosa Nightshade" ,
        " 236 " : "Yodin Zaku" ,
        " 237 " : "Halfling Alchemist" ,
        " 238 " : "Mighty Dricken" ,
        " 239 " : "Chanseus the Great" ,
        " 240 " : "Kretch Tallevor" ,
        " 241 " : "Onyx Sentinel" ,
        " 242 " : "Sand Worm" ,
        " 243 " : "Silvershield Sheriff" ,
        " 244 " : "Bila the Radiant" ,
        " 245 " : "Grim Reaper" ,
        " 246 " : "Phantasm" ,
        " 247 " : "Fineas Rage" ,
        " 248 " : "Ant Miners" ,
        " 249 " : "Spirit Druid Grog" ,
        " 250 " : "Captain's Ghost" ,
        " 251 " : "Kelp Initiate" ,
        " 252 " : "Gloridax Soldier" ,
        " 253 " : "Centauri Mage" ,
        " 254 " : "Lir Deepswimmer" ,
        " 255 " : "Robo-Dragon Knight" ,
        " 256 " : "Ancient Lich" ,
        " 257 " : "Vera Salacia" ,
        " 258 " : "Owster Rotwell" ,
        " 259 " : "Mylor Crowling" ,
        " 260 " : "Qid Yuff" ,
        " 261 " : "Lorna Shine" ,
        " 262 " : "Brighton Bloom" ,
        " 263 " : "Poseidon" ,
        " 264 " : "Frost Lion" ,
        " 265 " : "Caladuum" ,
        " 266 " : "Flamesmith" ,
        " 267 " : "Cthulhu" ,
        " 268 " : "Marrow's Ghost" ,
        " 269 " : "Kralus" ,
        " 270 " : "Lunakari Mistress" ,
        " 271 " : "Oaken Behemoth" ,
        " 272 " : "Goblin Dartling" ,
        " 273 " : "Battering Ram" ,
        " 274 " : "Naga Brute" ,
        " 275 " : "Dragon Spirit" ,
        " 276 " : "Grenadier" ,
        " 277 " : "Lensmaster" ,
        " 278 " : "Scarred Llama Mage" ,
        " 279 " : "Beatrix Ironhand" ,
        " 280 " : "Axemaster" ,
        " 281 " : "Charlok Minotaur" ,
        " 282 " : "Dark Ferryman" ,
        " 283 " : "Chain Spinner" ,
        " 284 " : "Harvester" ,
        " 285 " : "Nightmare" ,
        " 286 " : "Almo Cambio" ,
        " 287 " : "Demented Shark" ,
        " 288 " : "Temple Priest" ,
        " 289 " : "Efreet Elder" ,
        " 290 " : "Theorosa Nightshade" ,
        " 291 " : "Byzantine Kitty" ,
        " 292 " : "Goblin Firemage" ,
        " 293 " : "Lobstradamus" ,
        " 294 " : "The Gorlodon" ,
        " 295 " : "Hero of Beyond" ,
        " 296 " : "Two Gun Pete" ,
        " 297 " : "Epona" ,
        " 298 " : "Aganju" ,
        " 299 " : "Chimney Wallstop" ,
        " 300 " : "Krash Wanderford" ,
        " 301 " : "Orella Abadon" ,
        " 302 " : "Sarius" ,
        " 303 " : "Gorth" ,
        " 304 " : "Fina Voxom" ,
        " 305 " : "Alva the Crusher" ,
        " 306 " : "Isgald Vorst" ,
        " 307 " : "Alfredo" ,
        " 308 " : "Relenor Cleaver" ,
        " 309 " : "Edith Emberstar" ,
        " 310 " : "Flagulon Reine" ,
        " 311 " : "Bertrol Gobson" ,
        " 312 " : "Katrelba Gobson" ,
        " 313 " : "Cutter Brieze" ,
        " 314 " : "Palidon Rakk" ,
        " 315 " : "Quora Towershead" ,
        " 316 " : "Jini Guise" ,
        " 317 " : "Helmet Kharafax" ,
        " 318 " : "Hugo Strongsword" ,
        " 319 " : "Ajax Lightfoot" ,
        " 320 " : "Captain Katie" ,
        " 321 " : "Marisol Contuma" ,
        " 322 " : "Sola Ranjell" ,
        " 323 " : "Whistling Damon" ,
        " 324 " : "Witch of Warwick" ,
        " 325 " : "Kotriphus Bayne" ,
        " 326 " : "Liza Fox" ,
        " 327 " : "Trapp Falloway" ,
        " 328 " : "Xulax Nightwind" ,
        " 329 " : "Larissa Kerato" ,
        " 330 " : "Tatiana Blayde" ,
        " 331 " : "Venari Heatsmith" ,
        " 332 " : "Exploding Rats" ,
        " 333 " : "Lava Launcher" ,
        " 334 " : "Pelacor Mercenary" ,
        " 335 " : "Venari Seedsmith" ,
        " 336 " : "Djinn Biljka" ,
        " 337 " : "Pelacor Bandit" ,
        " 338 " : "Venari Wavesmith" ,
        " 339 " : "Djinn Oshannus" ,
        " 340 " : "Pelacor Deceiver" ,
        " 341 " : "Venari Bonesmith" ,
        " 342 " : "Harklaw" ,
        " 343 " : "Pelacor Conjurer" ,
        " 344 " : "Venari Crystalsmith" ,
        " 345 " : "Djinn Renova" ,
        " 346 " : "Naga Assassin" ,
        " 347 " : "Twilight Basilisk" ,
        " 348 " : "Djinn Chwala" ,
        " 349 " : "Gargoya Lion" ,
        " 350 " : "Gargoya Devil" ,
        " 351 " : "Uraeus"
    }

async function getTrxlDetails(trl){
    try{
        const details = await axios.get("https://api.splinterlands.io/transactions/lookup?trx_id="+trl);
        return details;
    }
    catch{
        console.log('could not get trl details');
        return "no details";
    }
}

async function parsePotions(object){
    let string = `${object.potion_type} ${object.type}`
    return string
}

async function parseCards(object){
    let newData = await getTrxlDetails(object.claim_trx_id);
    let card_number = JSON.parse(newData.data.trx_info.result).rewards[0].card.card_detail_id;
    let string = cardDict[` ${card_number} `];
    return string
}

async function parseTokens(object){
    // console.log('token', object)
    let string = `${object.quantity} ${object.type}`;
    return string
}

async function getStats(username){
    console.log(username)    
    const questInfo = await axios.get(`https://api.splinterlands.io/players/quests?username=${username}`)
    console.log(questInfo)

    if(questInfo != undefined){
        return questInfo;
    } else {
        return "Nothing";
    }
}

async function start(){
    accounts = 0
    for(i = 0; i<account.length; i++){
        console.log(account[i][0])
        const questRewards = await getStats(account[i][0]);
        if(questRewards != undefined){
            accounts += 1
            if(questRewards.data[0].claim_trx_id != null){
                let info = questRewards.data[0];
                let player = info.player;
                let reward = JSON.parse(info.rewards)[0];
                // let newData = await getTrxlDetails(questRewards.data[0].claim_trx_id);

                let newString;
                if(reward.type == "potion"){
                    newString = await parsePotions(reward);
                }
                else if (reward.type == "credits"){
                    newString = await parseTokens(reward);
                } else if(reward.type == "reward_card"){
                    newString = await parseCards(info);
                }
                accountDetails.push(`PLAYER: ${player}, ${newString}`);
            }   
        }
    }
    console.log(`Out of ${accounts} you collected the following`)
    console.log('===============================================')
    console.log(accountDetails)
    console.log('===============================================')
}

start();