import sqlite from 'better-sqlite3';

import courses from './courses.json' assert { type: 'json' };

const db = new sqlite('./courses.db');

const tableStmt = db.prepare('CREATE TABLE IF NOT EXISTS courses (_id text PRIMARY KEY, name text, city text, state text, latLng text)');

tableStmt.run();

const insert = db.prepare('INSERT INTO courses (_id, latLng, name, city, state) VALUES (@_id, @latLng, @name, @city, @state)');

const insertMany = db.transaction((courseList) => {
    for (const c of courseList) insert.run({
        _id: c._id,
        name: c.name,
        city: c.city,
        state: c.state,
        latLng: JSON.stringify(c.latLng)
    });
});

insertMany(courses);

db.close();