export function sendPostRequest(url, data) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
