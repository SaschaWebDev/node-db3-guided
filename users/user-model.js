// Naming access functions should be consistent across the whole application to keep complexitity awaay and keet the behaviour consistent for other deevs to use
const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
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
