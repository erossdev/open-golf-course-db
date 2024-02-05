const converter = require('json-2-csv'),
    fs = require('fs');

const c = require('./courses.json');

async function doit() {
    const csv = await converter.json2csv(c, {
        parseValue(val) {
            if(val === undefined) {
                return 'undefined';
            } else if(val.indexOf('[') > -1) {
                const splitsies = val.split(',');
                const latty = splitsies[0].substring(1, splitsies[0].indexOf('['), splitsies.length);
                const longy = splitsies[1].substring(0, splitsies[1].indexOf(']') + 1);
                return `${latty},${longy}`;
            } else {
                return String(val);
            }
        }
    });
    fs.writeFileSync('courses.csv', csv);
}

doit();
