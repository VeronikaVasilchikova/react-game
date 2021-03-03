const fs = require('fs');
const util = require('util');
const path = require('path');

const readfile = util.promisify(fs.readFile);
const writefile = util.promisify(fs.writeFile);

const usersPath = path.join(__dirname, '../data/users.json');

function getUsers() {
  return readfile(usersPath)
    .then(JSON.parse);
}

function getUser(id) {
  return getUsers()
    .then(users => users.find(user => user.id === +id))
}

function saveUsers(users) {
  return writefile(usersPath, JSON.stringify(users));
}

function saveUser(user) {
  return getUsers()
    .then(users => {
      users.push(user);

      return saveUsers(users);
    })
}

module.exports = {
  getUser,
  getUsers,
  saveUser,
  saveUsers
}
