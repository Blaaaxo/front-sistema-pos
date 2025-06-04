import { apiFetch } from "@/lib/api";

interface LoginPayload {
  email: string;
  password: string;
}

/**
 * Realiza una solicitud de inicio de sesión a la API.
 * @param payload - Objeto que contiene el correo electrónico y la contraseña del usuario.
 * @returns Una promesa que resuelve con los datos del usuario si el inicio de sesión es exitoso.
 * @throws Error si las credenciales son incorrectas o si ocurre un error en la solicitud.
 */
export async function login(payload: LoginPayload) {
  return await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
    credentials: "include",
  });
}

/**
 * Realiza una solicitud para obtener los datos del usuario actual.
 * @returns Una promesa que resuelve con los datos del usuario actual si la solicitud es exitosa.
 * @throws Error si ocurre un error al obtener los datos del usuario.
 */
export async function getCurrentUser() {
  // Realiza una solicitud GET a la API para obtener los datos del usuario actual
  return await apiFetch("/auth/me", {
    method: "GET",
    credentials: "include",
  });
}
