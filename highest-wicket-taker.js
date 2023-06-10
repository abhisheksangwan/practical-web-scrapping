const url ="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
const { has } = require("cheerio/lib/api/traversing");

request(url,cb);
function cb(err,response,html){
    if(err) console.log(err);
    extractHTML(html);
}
function extractHTML(html){
    let $ =cheerio.load(html);
    let teamsArr = $(".ds-text-compact-xxs.ds-p-2 .ci-team-score");
    let winningTeamName;
    for(let i=0;i<teamsArr.length;i++){
            let hasClass=$(teamsArr[i]).hasClass("ds-opacity-50"); // don't use .before de-opacity-50 in hasclass b/c already usi class me hain
            if(hasClass == false){
                let teamNameElement = $(teamsArr[i]).find(".ds-inline-flex.ds-items-start.ds-leading-none");
                winningTeamName = teamNameElement.text();
                console.log(winningTeamName);  // printed winner team
            }
    }
    let inningArr =$(".ds-rounded-lg.ds-mt-2");
    let htmlStr ="";
    for(let i=0;i<inningArr.length;i++){
        // let currentHTML = $(inningArr[i]).html();
        // htmlStr += currentHTML;
        // console.log(htmlStr); 
        let teamNameElement= $(inningArr[i]).find(".ds-rounded-lg.ds-mt-2 .ds-text-title-xs.ds-font-bold.ds-capitalize");
        let teamName =teamNameElement.text();
        if(teamName==winningTeamName){
            console.log(teamName);
            inningArr = $(inningArr[i]).find(".ds-p-0 .ds-w-full.ds-table.ds-table-md.ds-table-auto");
            let hasClass = $(inningArr[i]).find("ci-scorecard-table");
            if(hasClass==false){
                let allBowlers = $(inningArr[i]).find("tr");
                for(let j=0;j<allBowlers.length;j++){
                    let allColofPlayer = $(allBowlers[j]).find("td");
                    let playerName = $(allColofPlayer[0]).text();
                    let wickets = $(allColofPlayer[4]).text();
                    console.log(playerName, " : ", wickets);
                }
            }
        
        }
        
    }
}
