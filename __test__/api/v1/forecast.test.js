const request = require("supertest");
const {app} = require("../../../src/server");
const {cityMock, weatherForecastMock } = require("../../mock");

describe("GET /forecast/:city?", () => {
  const routeForecast ="/api/v1/forecast/"

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get(routeForecast)
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get(routeForecast.concat(cityMock));
    expect(response.statusCode).toBe(200);
  });
  
  test("should respond the weatherForecastMock", async () => {
    const response = await request(app).get(routeForecast.concat(cityMock));
    expect(response.body.city.name).toEqual(weatherForecastMock.city.name);
  });

  test("should respond with a 404 status code", async () => {
    const response = await request(app).get(routeForecast+"TT")
    expect(response.body.cod).toBe("404");
  });

});
