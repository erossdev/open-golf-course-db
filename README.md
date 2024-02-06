# open-golf-course-db
Open Source database for golf courses. The goal of this project is to keep an up-to-date database of all golf courses.

Currently, there are courses for just the USA but contributions for any country are welcome!

# Provided Outputs

In the `/outputs` folder you will find:

| File Name  | Type |
| ------------- | ------------- |
| courses.db  | SQLite DB  |
| courses.json | JSON Array  |
| courses.csv | CSV file |

# Course Fields

| Field Name  | Type | Description |
| ------------- | ------------- |
| _id  | text  | randomly generated unique identifier |
| name | string  | course name |
| city | string  | course city |
| state | string  | course state |
| country | string | course country |
| latLng | string or array  | Course coordinates. For SQLite format is a string `latitude, longitude`. For JSON it is an array `[latitude, longitude]` |

# How do I use it?

Feel free to download any of the outputs to use. We also provide an API at a fair price to help sustain this project. Check it out at [TBD](TBD)

# How do I contribute?

Coming Soon!