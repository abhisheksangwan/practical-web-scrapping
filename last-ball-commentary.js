const request =require("request");
const cheerio = require("cheerio");

const url ="https://www.espncricinfo.com/series/icc-world-test-championship-2021-2023-1268315/australia-vs-india-final-1358412/ball-by-ball-commentary";
console.log("Before");
request(url,cb);
function cb(err,response,html){
    if(err) console.log(err);
    extractHTML(html);
}
// console.log("After");

function extractHTML(html){
    let $ =cheerio.load(html);
    let eleArr =$(".ds-grow .ci-html-content");
    let htmldata = $(eleArr[0]).text();
    console.log( htmldata);
}