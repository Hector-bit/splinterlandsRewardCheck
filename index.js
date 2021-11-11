
const axios = require('axios');
let account = require('./account.json').account;
let accountDetails = [];

function getStats(username, key){
    let data = axios.get(`https://api.splinterlands.io/players/quests?username=${username}`);
    return data;
}

async function start(){

    for(i = 0; i<account.length; i++){
        // console.log(accountKeys[i], 'bitch');
        let response = await getStats(account[i][0], account[i][1]);
        accountDetails.push(response);
    }
    console.log('HERE YOU GO: ', accountDetails)
}

start();