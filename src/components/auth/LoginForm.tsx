"use client"

import React, { useState } from "react";
import { login } from "@/services/authService"; 
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

/**
 * Componente de formulario de inicio de sesión.
 * Permite a los usuarios ingresar su correo electrónico y contraseña para iniciar sesión.
 * Muestra un mensaje de error si las credenciales son incorrectas.
 */
export default function LoginForm() {
    // Estados para manejar el formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const { loadUser } = useAuth();

    // Maneja el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login({ email, password });
            await loadUser();
            router.push("/");
            
        } catch (err) {
            console.error("Error durante el login", err);
            setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium mb-1">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors"
            >
                Iniciar sesión
            </button>
        </form>
    )
}