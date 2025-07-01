"use client"

import React, { useState } from "react";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { POSLogo } from "../login/pos-logo";

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
    const { loadUser, loading } = useAuth();

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
        <>
            <Card className="w-full max-w-md bg-background">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        {/* aqui va el logo */}
                        <POSLogo />
                    </div>
                    <CardTitle className="text-2xl">Twainy POS</CardTitle>
                    <CardDescription>Ingrese sus credenciales para acceder.</CardDescription>
                </CardHeader>
                {/* Formulario de inicio de sesión */}
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="space-y-4">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                                type="email"
                                id="email"
                                placeholder="ingrese su correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-4">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input
                                className="py-4"
                                type="password"
                                id="password"
                                placeholder="ingrese su contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full mt-6 py-3" type="submit" disabled={!loading}>
                            {!loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    )
}