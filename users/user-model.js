// Naming access functions should be consistent across the whole application to keep complexitity awaay and keet the behaviour consistent for other deevs to use
const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  getUsersPosts,
};

function find() {
  // returns a list of the resource/users
  // the object always needs to be returned
  return db('users');
}

function findById(id) {
  // return the user if found or null if not found
  // where returns an array that is why first is used
  // first element of [] is undefined and not null
  // thus .then() needs to be used
  return db('users')
    .where({ id })
    .first()
    .then(user => {
      if (user) {
        return user;
      } else {
        return null;
      }
    });
}

function getUsersPosts(id) {
  // select p.contents as quote, u.username as author
  // from users as u
  // inner join posts as p on u.id = p.user_id
  // Map this into knex!
  return (
    db('users as u')
      // first argument is the table, then ON
      .innerJoin('posts as p', 'u.id', 'p.user_id')
      .where({ user_id: id })
      // no .then() needed
      .select('p.contents as quote', 'u.username as author')
  );
}
