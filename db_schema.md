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
| `created_pins`    | array     |                           |
| `bin_ids`         | array     |                           |
| `date`            | Date      | not null, default Now     |

+ index on `email, unique: true`


## `bins`

## `pins`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | hash      | not null, primary key     |
| `link_url`        | string    | not null                  |
| `cover_url`       | string    |                           |
| `tags`            | array     |                           |
| `comments`        | array     |                           |
| `title`           | string    |                           |
| `description`     | string    |                           |
| `snores`          | Integer   | not null, default 1       |
| `date`            | Date      | not null, default Now     |

## `comments`