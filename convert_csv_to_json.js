import fs from 'node:fs';
import Papa from 'papaparse';
import { titleCase } from 'title-case';

const c = fs.readFileSync('./courses.csv', { encoding: 'utf-8' });

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
            } else if (field === 'name' || field === 'city' | field === 'state') {
                return titleCase(val);
            } else {
                return val;
            }
        }
    });

    if (!errors.length) {
        console.log(`parsed ${ data.length } courses`);
        fs.writeFileSync('./courses.json', JSON.stringify(data));
        console.log('Saved to outputs folder.');
    } else {
        errors.forEach((e) => console.error(e));
    }
}

doit();
