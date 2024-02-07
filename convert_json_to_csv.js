import fs from 'node:fs';
import Papa from 'papaparse';

import c from './courses.json' assert { type: 'json' };

async function doit() {
    const data = Papa.unparse(c);
    fs.writeFileSync('courses.csv', data);
}

doit();
