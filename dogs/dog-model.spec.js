const db = require("../data/db-config");
const Dogs = require("./dog-model");

describe("database helper functions dog-model.js", () => {
  beforeEach(async () => {
    await db("dogs").truncate();
  });

  describe("getAll()", () => {
    it("returns an array from the database", async () => {
      const dogs = await Dogs.getAll();
      expect(dogs).toHaveLength(0);
    });
  });

  describe("add(dog)", () => {
    it("adds a new dog to the database and returns an id", async () => {
      const dog = await Dogs.add({ breed: "husky" });
      console.log(dog);
      expect(dog[0]).toBe(1);
    });
  });

  describe("getById(id)", () => {
    it("recieves an ID and returns corresponding dog", async () => {
      const id = await Dogs.add({ breed: "husky" });
      const dog = await Dogs.getById(id[0]);
      expect(dog.breed).toBe("husky");
    });
  });

  describe("destroy(id)", () => {
    it("recieves an id and deletes corresponding dog from database", async () => {
      const id = await Dogs.add({ breed: "husky" });
      await Dogs.destroy(id[0]);
      const dog = await Dogs.getById(id[0]);
      expect(dog).toBe(undefined);
    });
  });
});
