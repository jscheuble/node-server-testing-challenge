const request = require("supertest");
const db = require("../data/db-config");
const server = require("./server");

describe("server.js", () => {
  beforeEach(async () => {
    await db("dogs").truncate();
  });

  describe("GET /", () => {
    it("should return a status of 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("returns message api: running", async () => {
      const res = await request(server).get("/");
      expect(res.body.api).toBe("works");
    });
  });

  describe("GET /dogs", () => {
    it("should return a status of 200 OK", async () => {
      const res = await request(server).get("/dogs");
      expect(res.status).toBe(200);
    });

    it("returns an array of dogs", async () => {
      let res = await request(server).get("/dogs");
      expect(res.body.length).toBe(0);
    });
  });

  describe("POST /dogs", () => {
    it("should return a status of 201 created", async () => {
      let res = await request(server).post("/dogs").send({
        breed: "chihuahua",
      });
      expect(res.status).toBe(201);
    });

    it("should return an id of new created object", async () => {
      let res = await request(server).post("/dogs").send({
        breed: "husky",
      });
      expect(res.body.message).toBe("new dog added with id 1");
    });
  });
});
