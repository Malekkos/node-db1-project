const Account = require("./accounts-model")
const db = require("../../data/db-config")

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const error = {status: 400 }
  const name = req.body.name
  const budget = req.body.budget
  if(name === undefined || budget === undefined) {
    error.message = "name and budget are required"
    next(error);
  } else if(name.trim().length < 3 || name.trim().length > 100){
      error.message = "name of account must be between 3 and 100"
    next(error);
  } else if(Number.isInteger(budget) === false) {
      error.message = "budget of account must be a number"
    next(error);
  } else if(budget < 0 || budget > 1000000) {
      error.message = "budget of account is too large or too small"
    next(error);
  } else {
    next()
  }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  const name = req.body.name
  const doesExist = await db("accounts").where("name", name.trim()).first()
  if(doesExist) {
    next({ status: 400, message: "that name is taken"})
  }
  next()
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  const id = req.params.id
  const error = { status: 404 }
  const account = await Account.getById(id)
  if (!account) {
    error.message = "account not found"
    next(error)
  } else {
    req.id = id
    next()
  }
}
