# Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | hash      | not null, primary key     |
| `firstname`       | string    | not null, indexed, unique |
| `lastname`        | string    | not null, indexed, unique |
| `email`           | string    | not null, indexed, unique |
| `password`        | string    | not null                  |
| `pin_ids`         | array     |                           |
| `bin_ids`         | array     |                           |
| `date`            | Date      | not null, default Now     |

+ index on `email, unique: true`


## `bins`

## `pins`

## `comments`