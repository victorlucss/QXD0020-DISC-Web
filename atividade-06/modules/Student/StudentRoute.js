const express = require('express');
const router = express.Router();
const service = require('./StudentService')

router.get('/', async function (req, res, next) {
  const list = await service.list()
  res.json(list);
});

router.get('/:id', async function (req, res, next) {
  const found = await service.retrieve(req.params.id)
  return res.json(found)
});

router.post('/', async function (req, res, next) {
  const student = await service.create(req.body)

  return res.json(student);
});

router.patch('/:id', async function (req, res, next) {
  const updated = await service.update(req.params.id, req.body)
  return res.json(updated)
});

router.delete('/:id', async function (req, res, next) {
  await service.delete(req.params.id)
  return res.status(204).send()
});

module.exports = router;
