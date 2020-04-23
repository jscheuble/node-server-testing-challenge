exports.up = function (knex) {
  return knex.schema.createTable("dogs", (tbl) => {
    tbl.increments();
    tbl.string("breed").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dogs");
};
