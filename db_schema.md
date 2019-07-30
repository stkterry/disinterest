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
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | hash      | not null, primary key     |
| `title`           | string    |                           |
| `description`     | string    |                           |
| `tags`            | array     |                           |
| `cover_url`       | string    |                           |
| `pin_ids`         | array     |                           |
| `date`            | Date      | not null, default Now     |

## `pins`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | hash      | not null, primary key     |
| `url_id`          | ObjectId  | not null                  |
| `cover_url`       | string    |                           |
| `title`           | string    | not null                  |
| `description`     | string    | not null                  |
| `tags`            | array     |                           |
| `comment_ids`     | array     |                           |
| `date`            | Date      | not null, default Now     |

## `urls`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | hash      | not null, primary key     |
| `link`            | string    | not null                  |
| `snores`          | Integer   | not null, default 1       |
| `date`            | Date      | not null, default Now     |

## `comments`