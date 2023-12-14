const Account = require("./accounts-model")

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const name = req.body.name
  const budget = req.body.name
  if(!name || !budget) {
    res.status(400).json({
      message: "name and budget are required"
    })
  } else if(name.trim() < 3 || name.trim() > 100){
    res.status(400).json({
      message: "name of account must be between 3 and 100"
    })
  } else if(Number.isInteger(budget) === false) {
    res.status(400).json({
      message: "budget of account must be a number"
    })
  } else if(budget < 0 || budget > 1000000) {
    res.status(400).json({
      message: "budget of account is too large or too small"
    })
  } else {
    next()
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id
  Account.getById(id)
  // console.log("I have ran")
  .then(account => {
    if(account.length == 0) {
      res.status(404).json({
        message: "account not found"
    })
    } else {
      req.id = id
      next()
    }
  })
}
