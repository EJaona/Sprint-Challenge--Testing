const request = require("supertest");
const server = require("./server");

describe("GET /games", () => {
  it("should return empty array if now data", async () => {
    const games = await request(server).get("/games");
    expect(games.text).toEqual("[]");
  });
}); // Game data must be commented to pass this test

describe("GET /games", () => {
  it("should return all games in DB", async () => {
    const games = await request(server).get("/games");
    expect(games.text).toEqual(
      '[{"title":"Pacman","genre":"Arcade","releaseYear":1980}]'
    );
  });
});

describe("GET /games", () => {
  it("should return status 200", async () => {
    const games = await request(server).get("/games");
    expect(games.status).toEqual(200);
  });
});

describe("POST /games", () => {
  it("should return posted game", async () => {
    const game = await request(server)
      .post("/games")
      .send({ title: "Tron", genre: "Arcade", releaseYear: 1980 });
    expect(game.text).toEqual(
      '{"title":"Tron","genre":"Arcade","releaseYear":1980}'
    );
  });
});

describe("POST /games", () => {
  it("should return error for missing genre", async () => {
    const game = await request(server)
      .post("/games")
      .send({ title: "Race", releaseYear: 1980 });
    expect(game.text).toEqual('{"message":"oops"}');
  });
});

describe("POST /games", () => {
  it("should return status 422", async () => {
    const game = await request(server)
      .post("/games")
      .send({ title: "Race", releaseYear: 1980 });
    expect(game.status).toBe(422);
  });
});
