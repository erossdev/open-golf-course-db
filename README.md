# open-golf-course-db

Open Source database for golf courses. The goal of this project is to keep an up-to-date database of all golf courses.

# Provided Outputs

In the `/outputs` folder you will find:

| File Name    | Type       |
| ------------ | ---------- |
| courses.db   | SQLite DB  |
| courses.json | JSON Array |

# Included Courses

Right now, there are over 10,000 courses only in the US. The long-term plan is to include courses from every country with accurate data.

# Course Fields

| Field Name | Type     | Description                                          |
| ---------- | -------- | ---------------------------------------------------- |
| \_id       | `string` | randomly generated unique identifier                 |
| name       | `string` | course name                                          |
| city       | `string` | course city                                          |
| state      | `string` | course state                                         |
| country    | `string` | course country                                       |
| latLng     | `array`  | course coordinates. `undefined` if we don't have any |
| updatedAt  | 'string' | date string format                                   |

# How do I use it?

Download any artifact from the [Releases](https://github.com/erossdev/open-golf-course-db/releases). Only artifacts in releases should be downloaded.

# Is there an API?

Coming soon. An API will be a fair price and will help sustain development and upkeep of this free database!

# How do I contribute?

Right now, `courses.csv` acts as the "gold copy" of data.

1. Open an issue
2. Make your changes
3. Submit a Pull Request and it will be reviewed, merged and tagged.
