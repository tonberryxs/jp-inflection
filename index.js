const conjugate = require('./core');
const search = require('./search');
const { findIndex } = require('lodash');

const inflections = (word) => new Promise((resolve, reject) => {
    search(word).then((entry) => {
        if (word === undefined) word = process.env.word;
        console.log(entry, 'DDD');
        const types = ["&vk;", "&vs-i;", "&v5m", "&adj-i;", "&v1;"];
        const type = entry[0].type;
        let pos = findIndex(type, (b) => { return types.includes(b) || b.search(/^&v5(.*)$/) - 1 })
        console.log(pos, type)
        let final = conjugate(entry[0].hiragana, entry[0].type[pos]);
        console.log(final);
        resolve(final);
    })
});

module.exports = inflections