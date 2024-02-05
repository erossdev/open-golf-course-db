const Papa = require('papaparse'),
    fs = require('fs');

const c = fs.readFileSync('courses.csv', { encoding: 'utf-8' });

async function doit() {
    const { data, errors } = Papa.parse(c, {
        header: true,
        transform(val, field) {
            if (field === 'latLng') {
                if (val === 'undefined') {
                    return 'undefined';
                } else {
                    const coords = val.split(',');
                    const jsonifiedCoords = [parseFloat(coords[1]), parseFloat(coords[0])];// [lat, long]
                    return jsonifiedCoords;
                }
            } else {
                return val;
            }
        }
    });


    if (!errors.length) {
        console.log(`parsed ${ data.length } courses`);
        fs.writeFileSync('./outputs/courses.json', JSON.stringify(data));
        console.log('Saved to outputs folder.');
    }
}

doit();
