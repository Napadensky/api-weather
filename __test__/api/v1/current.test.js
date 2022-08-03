const request = require("supertest");
const { app } = require("../../../src/server");
const { cityMock, weatherMock } = require("../../mock");

describe("GET /current/:city?", () => {
  const routeCurrent ="/api/v1/current/"

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get(routeCurrent);
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get(routeCurrent.concat(cityMock));
    expect(response.statusCode).toBe(200);
  });

  test("should respond the weatherMock", async () => {
    const response = await request(app).get(routeCurrent.concat(cityMock));
    expect(response.body.name).toEqual(weatherMock.name);
  });
  
  test("should respond with a 404 status code", async () => {
    const response = await request(app).get(routeCurrent+"TT");
    expect(response.body.cod).toBe("404");
  });
});
