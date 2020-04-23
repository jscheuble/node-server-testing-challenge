const request = require("supertest");
const db = require("../data/db-config");
const server = require("./server");

describe("server.js", () => {
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
});
