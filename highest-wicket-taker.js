const url ="https://www.espncricinfo.com/series/indian-premier-league-2023-1345038/gujarat-titans-vs-chennai-super-kings-final-1370353/full-scorecard";
const request = require("request");
const cherrio = require("cheerio");

request(url,cb);
function cb(err,response,html){
    if(err) console.log(err);
    extractHTML(html);
}
extractHTML(html){
    let $ =cherrio.load(html);

    let teamsArr =$("ds-font-regular ds-truncate");
    let teamName;
        teamName = teamsArr[0];
        teamName += teamsArr[1];
        





}


