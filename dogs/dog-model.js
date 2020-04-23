const db = require("../data/db-config");

module.exports = {
  add,
  destroy,
  getAll,
  getById,
};

async function add(dog) {
  return db("dogs").insert(dog, "id");
}

function destroy(id) {
  return db("dogs").where({ id }).del();
}

function getAll() {
  return db("dogs");
}

function getById(id) {
  return db("dogs").where({ id }).first();
}
