const {Router} = require("express");
const router = Router();
const usersControllers = require('../controllers/users');

router.get('/', (req, res) => {
  usersControllers.getUsers()
    .then(users => res.json(users))
    .catch(err => {
      res
        .status(404)
        .send({error: err})
    })
});

router.get('/:id', (req, res) => {
  usersControllers.getUser(req.params.id)
    .then(user => res.json(user))
    .catch(err => {
      res
        .status(404)
        .send({error: err})
    });
});

router.post('/', (req, res) => {
  usersControllers.saveUser(req.body)
    .then(() => res
      .status(200)
      .send({message: `${req.body.userName} was successfully saved!`})
    )
    .catch(err => {
      res
        .status(500)
        .send({error: err}
      )
    });
});

module.exports = router;
