test("GET to /api/status should return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(parsedUpdatedAt.toString()).not.toBe("Invalid Date");
  expect(parsedUpdatedAt).toEqual(responseBody.updated_at);

  expect(responseBody?.dependencies.database.version).toEqual("16.0");
  expect(responseBody?.dependencies.database.max_connections).toEqual(100);
  expect(responseBody?.dependencies.database.open_connections).toEqual(1);
});
