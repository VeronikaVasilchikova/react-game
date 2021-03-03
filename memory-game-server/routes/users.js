const {Router} = require("express");
const router = Router();
const usersControllers = require('../controllers/users');

router.get('/', (req, res) => {
  usersControllers.getUsers()
    .then(users => res.json(users))
    .catch(err => {
      console.log(err);
      res.status(404);
      res.end('not found');
    })
});

router.get('/:id', (req, res) => {
  usersControllers.getUser(req.params.id)
    .then(user => res.json(user))
    .catch(err => {
      res.status(404);
      res.end('not found');
    });
});

router.post('/', (req, res) => {
  usersControllers.saveUser(req.body)
    .then(() => res.end('saved!'))
    .catch(err => {
      console.log(err);
      res.status(500);
      res.end('failed');
    });
});

module.exports = router;
