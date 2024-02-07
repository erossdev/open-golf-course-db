const sqlite = require('better-sqlite3');

const db = new sqlite('./courses.db');

const courses = require('./courses.json');

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