const db = require("../../data/db-config")

 const getAll = async () => {
  // DO YOUR MAGIC
   const result = await db("accounts")
   return result
}

 const getById = async id => {
  // DO YOUR MAGIC
  const result = await db("accounts").where({"id": id})
  return result
}

 const create = async account => {
  // DO YOUR MAGIC
}

 const updateById = async (id, account) => {
  // DO YOUR MAGIC
}

 const deleteById = async id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
