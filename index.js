
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
                let newData = await getTrxlDetails(questRewards.data[0].claim_trx_id);
                accountDetails.push(newData.data.trx_info.result);
            }   
        }
    }
    console.log(`Out of ${accounts} you collected the following`)
    console.log('===============================================')
    console.log(accountDetails)
    console.log('===============================================')
}

start();