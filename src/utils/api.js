export async function controller(method, action, body) {
  const URL = `https://64d11964ff953154bb79fa41.mockapi.io/${action}`;

  const params = {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  if (body) params.body = JSON.stringify(body);

  const response = await fetch(URL, params);
  return await response.json();
}
