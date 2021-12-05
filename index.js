
const axios = require('axios');
let account = require('./account.json').account;
let cardDict = require('./cards.json');
let accountDetails = [];

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
    console.log('card', object)
    let string = 'cards'
    return string
}

async function parseTokens(object){
    // console.log('token', object)
    let string = `${object.quantity} ${object.type}`;
    return string
}

function getStats(username){
    const questInfo = axios.get(`https://api.splinterlands.io/players/quests?username=${username}`)
    if(questInfo != "undefined"){

        return questInfo;
    } else {
        return "Nothing";
    }
}

async function start(){
    accounts = 0
    for(i = 0; i<account.length; i++){
        const questRewards = await getStats(account[i][0]);
        // console.log(questRewards.data[0]);
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
                } else if(reward.type == "card"){
                    newString = await parseCards(reward);
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