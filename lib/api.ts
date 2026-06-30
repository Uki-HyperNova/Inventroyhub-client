const API_URL = process.env.NEXT_PUBLIC_API_URL

export function extractError(data: Record<string, unknown>, fallback: string): string {
  if (data.error) return data.error as string
  if (data.errors) {
    return Array.isArray(data.errors) ? (data.errors as string[]).join(", ") : (data.errors as string)
  }
  return fallback
}

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  return { ok: res.ok, data }
}

export async function registerUser(email: string, password: string) {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  return { ok: res.ok, data }
}
