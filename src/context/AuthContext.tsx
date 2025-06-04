"use client"

import { createContext, useContext, useState } from "react"
import { User } from "@/types/user"
import { getCurrentUser } from "@/services/authService";

type AuthContextType = {
    user: User | null;
    loading: boolean;
    loadUser: () => Promise<void>;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    loadUser: async () => { },
    setUser: () => { }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const loadUser = async () => {
        setLoading(true);
        try {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            loadUser,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe utilizarce dentro de un AuthProvider");
    }
    return context;
}