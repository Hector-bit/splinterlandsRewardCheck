require('dotenv').config();
const stuff = process.env.ACCOUNTS;

$.get('/account.json',{},function(content){
    let lines=content.split('\n');

     console.log(`"file.txt" contains ${lines.length} lines`)
    console.log(`First line : ${lines[0]}`)

});

function getStats(){
    fetch(`https://api.splinterlands.io/players/quests?username=`);
}

console.log(accountStuff)