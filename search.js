const fs = require('fs');
const xml2js = require('xml2js');
// const escape = require('xml-escape');
// const { compact, uniq, isEmpty } = require('lodash');
var parser = new xml2js.Parser();

const XML_IGNORE = '<>\"';

// const xml2json = () => new Promise(() => {
//     fs.readFile('./JMdict_e', function (err, rawData) {
//         let entry
//         data = escape(rawData.toString(), XML_IGNORE);
//         if (err) reject(err);
//         parser.parseString(data, function (err, result) {
//             console.log('res', result, err, JSON.stringify(result.JMdict.entry[100]));
//             fs.writeFileSync('./JMdict_e.json', JSON.stringify(result));
//         });
//     })
// });

const search = (keyword) => new Promise((resolve, reject) => {
    let finalEntry = [];
    console.log('Searching for', keyword);
    let result = JSON.parse(fs.readFileSync('./JMdict_e.json'));
    // if (keyword.match(/[\u4e00-\u9faf\u3400-\u4dbf]/)) {
    //     entry = result.JMdict.entry.find((keyw) => keyw.k_ele[0].keb[0] === keyword)
    // } else {
    //     entry = result.JMdict.entry.find((keyw) => keyw.r_ele[0].reb[0] === keyword)
    // }
    entry = result.JMdict.entry.find((keyw) => keyw.r_ele[0].reb[0] === keyword)
    console.log(JSON.stringify(entry), 'found')
    finalEntry.push({
        type: entry.sense[0].pos,
        meaning: entry.sense[0].gloss,
        kanji: entry.k_ele[0].keb[0],
        hiragana: entry.r_ele[0].reb[0]
    });
    console.log(JSON.stringify(finalEntry), 'finalEntry')
    resolve(finalEntry);
}).catch(err => Error(err));

// search().then((ENTRIES) => console.log('Your search returned:', JSON.stringify(ENTRIES)));

module.exports = search;