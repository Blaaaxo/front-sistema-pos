import { apiFetch } from "@/lib/api";

interface LoginPayload {
  email: string;
  password: string;
}

export async function login(payload: LoginPayload) {
    return await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        credentials: 'include',
    })
}