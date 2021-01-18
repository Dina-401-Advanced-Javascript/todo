# LAB - Class 31

## Project: To Do app

### Author: Dina Ayoub

### Links and Resources

- [ci/cd](https://github.com/Dina-401-Advanced-Javascript/todo/actions) (GitHub Actions)
- [back-end server url on heroku](https://dina-todo.herokuapp.com/)

### Setup

#### `.env` requirements (where applicable)

- `PORT` - Port Number, 3000 for us

#### How to initialize/run your application (where applicable)

- `npm start`

#### How to use this api

- GET all: /artists or /artworks. returns all item
- GET one: /artists/3 or /artworks/3 where 3 is the id of the item. returns selected item.
- POST: /artists send a json object in the body. returns added item.
- PUT: /artists/3 send a json object in the body. returns updated item.
- DELETE: /artists/3. returns all remaining items.

#### Tests

- `npm test`
- Tests will check:
  - 404 on a bad route (anything other than /artists or /artworks)
  - 404 on a bad method (such as a POST with an ID)
  - 500 if no name in the query string for get /person route
  - 200 for valid get, put or delete
  - correct id for valid post

#### UML

![UML Diagram](assets/uml.png)
