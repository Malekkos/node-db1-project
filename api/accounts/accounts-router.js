const router = require('express').Router()
const Account = require("./accounts-model")

const { checkAccountId } = require("./accounts-middleware")

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  Account.getAll()
  .then(accounts => {
    res.status(200).json(accounts)
  })
  .catch(error => {
    next(error)
  })
})

router.get('/:id',checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.id
  Account.getById(id)
  .then(account => {
    res.status(200).json(account)
  })
  .catch(error => {
    next(error)
  })
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  const newAcc = req.body
  Account.create(newAcc)
  .then(account => {
    res.status(201).json(account)
  })
  .catch(error => {
    next(error)
  })
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.id
  const updatedAcc = req.body
  Account.updateById(id, updatedAcc)
  .then(account => {
    res.status(202).json(account)
  })
  .catch(error => {
    next(error)
  })
});

router.delete('/:id', async(req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id
  const accountToBeDeleted = await Account.getById(id)
  Account.deleteById(id)
  .then(() => {
    res.status(200).json(accountToBeDeleted)
  })
  .catch(error => {
    next(error)
  })
})

router.use((error, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(error.status || 500).json({
    message: error.message,
    customeMessage: "Something bad inside the accounts router"
  })
})

module.exports = router;
