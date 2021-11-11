let account = require('./account.json').account;
let accountDetails = [];

async function getStats(username, key){
    try {
        console.log('works ', username, key);
        const data = await fetch(`https://api.splinterlands.io/players/quests?username=${key}`);
        accountDetails.push(data);
    }
    catch{
        console.log(`Could not get info from account: ${username}`)
    }
}

for(i = 0; i<account.length; i++){
    // console.log(accountKeys[i], 'bitch');
    getStats(account[i][0], account[i][1]);
}

console.log(`CONGRATS: ${accountDetails}`);