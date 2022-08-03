const request = require("supertest");
const { app } = require("../../../src/server");
const { cityMock } = require("../../mock")

describe("GET /location", () => {
  const routeLocation ="/api/v1/location/"

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get(routeLocation);
    expect(response.statusCode).toBe(200);
  });
  
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get(routeLocation);
    expect(response.body.city).toEqual(cityMock);
  })

});
