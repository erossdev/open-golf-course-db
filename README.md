# open-golf-course-db

Open Source database for golf courses. The goal of this project is to keep an up-to-date database of all golf courses.

> [!WARNING]  
> This project is usable but not yet at v1. There may be duplicate courses, course names slightly wrong, or incorrect/missing `latLng` values

# Provided Outputs

In the `/outputs` folder you will find:

| File Name    | Type       |
| ------------ | ---------- |
| courses.db   | SQLite DB  |
| courses.json | JSON Array |

# Course Fields

| Field Name | Type                | Description                                                                                                                                |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| \_id       | `string`            | randomly generated unique identifier                                                                                                       |
| name       | `string`            | course name                                                                                                                                |
| city       | `string`            | course city                                                                                                                                |
| state      | `string`            | course state                                                                                                                               |
| country    | `string`            | course country                                                                                                                             |
| latLng     | `string` or `array` | Course coordinates. For SQLite format it is represented as a string `latitude, longitude`. For JSON it is an array `[latitude, longitude]` |

# How do I use it?

Download any artifact from the [Releases](https://github.com/erossdev/open-golf-course-db/releases). Only artifacts in releases should be downloaded.

# Is there an API?

Coming soon. An API will be a fair price and will help sustain development and upkeep of this free database!

# How do I contribute?

Right now, `courses.csv` acts as the "gold copy" of data.

1. Open an issue
2. Make your changes
3. Submit a Pull Request and it will be reviewed, merged and tagged.
