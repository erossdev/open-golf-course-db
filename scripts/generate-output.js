import fs from 'node:fs';
import { convertCsvToJson } from './convert_csv_to_json.js';
import { convertJsonToSqlite } from './convert_json_to_sqlite.js';

async function doIt() {
    await convertCsvToJson();
    await convertJsonToSqlite();
}

doIt();