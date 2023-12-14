const db = require("../../data/db-config")

 const getAll = async () => {
  // DO YOUR MAGIC
   const result = await db("accounts")
   return result
}

 const getById = async id => {
  // DO YOUR MAGIC
  const result = await db("accounts").where({"id": id}).first()
  return result
}

 const create = async account => {
  // DO YOUR MAGIC
  const result = await db("accounts").insert({"name": account.name, "budget": account.budget})
  return result
}

 const updateById = async (id, account) => {
  // DO YOUR MAGIC
  console.log("this is the acocunt stuff", account.name, account.budget)
  await db("accounts").where("id", id).update({"name": account.name, "budget": account.budget})
  const result = getById(id)
  return result
}

 const deleteById = async id => {
  // DO YOUR MAGIC
  const result = await db("accounts").where("id", id).delete()
  return result
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
