
const axios = require('axios');
let account = require('./account.json').account;
let accountDetails = [];

function getStats(username){
    axios.get(`https://api.splinterlands.io/players/quests?username=${username}`)
    .then(response => {
        return response.data[0].rewards
    })
    .catch(error => {
        console.log('could not find user: ', username);
        console.log('THE ERROR: ', error);
    })
}

async function start(){
    accounts = 0
    for(i = 0; i<account.length; i++){
        // console.log(accountKeys[i], 'bitch');
        let response = await getStats(account[i][0]);
        if(response != undefined){
            accounts += 1
            accountDetails.push(response);   
        }
    }
    console.log(`Out of ${accounts} you collected the following`)
    console.log('===============================================')
    console.log(accountDetails)
    console.log('===============================================')
}

start();