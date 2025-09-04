test('GET to /api/status should return 200', async () => {
  const res = await fetch('http://localhost:3000/api/v1/status');
  const data = await res.json();

  expect(res.status).toBe(200);
  expect(data).toEqual({ message: 'mêsVersário' });
});