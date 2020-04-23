const db = require("../data/db-config");
const Dogs = require("./dog-model");

describe("database helper functions dog-model.js", () => {
  //   beforeEach(async () => {
  //     await db("dogs").truncate();
  //   });

  describe("getAll()", () => {
    it("returns an array from the database", async () => {
      const dogs = await Dogs.getAll();
      expect(dogs).toHaveLength(0);
    });
  });
});
