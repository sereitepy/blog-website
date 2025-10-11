const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function fetchUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function createUser(data: any) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data),
    credentials: 'include', // if we're using cookies for auth
  });
  if (!res.ok) throw new Error('Failed to create');
  return res.json;
}