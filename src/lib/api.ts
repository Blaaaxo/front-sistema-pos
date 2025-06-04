/**
 * apiFetch es una función para realizar peticiones a la API.
 * Utiliza la URL base definida en las variables de entorno y maneja errores comunes.
 * @param endpoint - El endpoint de la API al que se desea hacer la petición.
 * @param options - Opciones adicionales para la petición, como método, headers, etc.
 * @return Una promesa que resuelve con los datos de la respuesta en formato JSON.
 * @throws Error si la respuesta de la API no es exitosa.
 */
export async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {}
) {

    // Asegura la URL del API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    })

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} - ${errorData.message || 'Unknown error'}`);
    }

    return response.json() as Promise<T>;
}