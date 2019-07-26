# Disinterest
A Pinterest clone of the world's most uninteresting topics

# Project Team
* Michael Warner
* Steven Terry
* Charles Mancuso

# Functionality and MVP
## User Authentication
* Users can create accounts, login, and logout
* User demo account and functionality
* Protected/Auth routes to ensure user login

## Landing
* List of all related pins
* Interactive elements that refer to bins and pins

## Bins
* Curated collection of user's pins
* Manage, create, and delete pin collections

## Pins
* Individual elements that link to sites of interest
* Contains comments, links to related pins, total pins from other users

# Technology 
## Featured Technologies
* Javascript
* MongoDB (backend database)
* SCSS/CSS
* HTML
* AWS S3
* Docker

## Libraries and Featured Frameworks
* Express (Javascript web framework)
* Apollo GraphQL
* React
* Docker Compose
* Heroku

## Work Breakdown
### Friday, July 26th
* [ ] Wiki - all
* [x] Skeleton - all
* [x] Authentication - all
  * [x] Server models and schema for users
  * [x] Validations for users
  * [x] Auth services

### Saturday, July 27th
* Backend Setup (bins, pins) - Steven
  - Server models and schema for bins and pins
  - Validations for bins, pins
* Profile, Profile CSS - Mike
  - Client graphql for users (mutations and queries for adding bins and pins)
  - Client components for users (profile page, profile css)
* Seeding Ideas and seeding structure - Charles
  - Creating the basic structure for a seeding model to fill out site

### Sunday, July 28th
* Global CSS - Steven
  - Adding global CSS for buttons, links, reusable elements, etc.
  - Finishing validations for bins, pins
* Navigation - Mike
  - Client graphql for nav (if any)
  - Client components for navigation (nav header, nav css)
* Seeding Ideas and seeding structure - Charles
  - Creating the basic structure for a seeding model to fill out site

### Monday, July 29th
* Initial seeds for bins/pins - Michael
  - querying and mutating pin information independent of image seeding
* Pins index page - Steven
  - Client graphql for all pins
  - Client components for pins index (stand-in pins, pins index page, pins index css)
* Bins index page - Charles
  - Client graphql for all bins (within profile page)
  - Client components for bins index (stand-in bins, bins index page, bins index css)

### Tuesday, July 30th
* Pin show page - Steven
  - Client graphql for pin details
  - Client components for pin show (pin show page, pin show css)
* Comments - Charles
  - Server models and schema for pin comments
  - Validations for pin comments
* Styling - Michael
  - Second global CSS pass
  - Touch ups to Nav, Profile CSS

### Wednesday, July 31st
* AWS image hosting - Michael
  - Setup of image hosting via AWS
  - Integration of images into seeds and database
* Seeding - Charles, Steven
  - Creating seeding functions to automate filling out the database


### Thursday, August 1st
* Reserve Day - All
  - Free day to account for the unexpected

### Friday, August 2nd
* Finish any remaining features/styling - all
* Bonush features - all
* ReadME - all
