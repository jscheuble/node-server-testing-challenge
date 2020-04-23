exports.seed = function (knex) {
  return knex("dogs").then(() => {
    return knex("dogs").insert([
      { breed: "husky" },
      { breed: "boxer" },
      { breed: "pit bull" },
      { breed: "malamute" },
    ]);
  });
};
