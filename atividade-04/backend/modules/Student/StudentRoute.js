const express = require('express');
const router = express.Router();
const service = require('./StudentService')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(service.list());
});

router.get('/:id', function(req, res, next) {
  return res.json(service.retrieve(Number(req.params.id)))
});

router.post('/', function(req, res, next) {
  const student = service.create(req.body)

  return res.json(student);
});

router.patch('/:id', function(req, res, next) {
  return res.json(service.update(Number(req.params.id), req.body))
});

router.delete('/:id', function(req, res, next) {
  service.delete(Number(req.params.id))
  return res.status(204).send()
});

module.exports = router;
