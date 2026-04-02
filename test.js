fetch('https://api.example.com/data?id=123')
  .then((response) => response.json())
  .then((data) => console.log(data));

axios
  .get('https://api.example.com/data', { params: { id: 123 } })
  .then((response) => console.log(response.data));

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Gemini', age: 3 }),
}).then((response) => response.json());

axios.post('https://api.example.com/data', { name: 'Gemini', age: 3 });

fetch('https://api.example.com/data/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Updated Name' }),
});

axios.put('https://api.example.com/data/1', { name: 'Updated Name' });

fetch('https://api.example.com/data/1', {
  method: 'DELETE',
});

axios.delete('https://api.example.com/data/1');
