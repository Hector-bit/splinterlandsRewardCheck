
const axios = require('axios');
let account = require('./account.json').account;
let accountDetails = [];

function getStats(username){
    const questInfo = axios.get(`https://api.splinterlands.io/players/quests?username=${username}`)
    // .then(response => {
    //     // console.log(response, 'sfasdf')
    //     returnData = response.data
    //     console.log(returnData)
    //     return returnData
    // })
    // .catch(error => {
    //     console.log('could not find user: ', username);
    //     console.log('THE ERROR: ', error);
    //     return "error"
    // })
    // return "nothing"
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
        // console.log(questRewards);
        if(questRewards != undefined){
            accounts += 1
            accountDetails.push(questRewards.data[0].rewards);   
        }
    }
    console.log(`Out of ${accounts} you collected the following`)
    console.log('===============================================')
    console.log(accountDetails)
    console.log('===============================================')
}

start();