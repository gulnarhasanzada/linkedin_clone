import axios from "axios";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export interface AuthUser {
    email: string;
    password: string;
    id: string;
}
export interface AuthData {
    email: string;
    password: string;
}

interface AuthContextType{
    user: AuthUser | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    login: (data: AuthData)=> Promise<void>;
    logout: ()=> void;
    register: (data: AuthData) => Promise<void>;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: {children: ReactNode})=>{
    const [user, setUser] = useState<AuthUser | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);

    const login =  useCallback(async (authData: AuthData)=> {
        setLoading(true);
        setError(null);
        try {
            const loginUrl = `${import.meta.env.VITE_AUTH_URL}/login`;
            const res = await axios.post(loginUrl, authData);
            setUser(res.data.user)
            setToken(res.data.token);
        } catch (error : any) {
            setError(error.response?.data?.message || "Login failed");
        }finally{
            setLoading(false);
        }
    }, []);


    const logout = useCallback(()=> {
        setUser(null)
        setToken(null);
    },[]);


    const register = useCallback(async (authData: AuthData)=> {
        setLoading(true);
        setError(null);
        try {
            const registerUrl = `${import.meta.env.VITE_AUTH_URL}/register`;
            const res = await axios.post(registerUrl, authData);
            setUser(res.data.user)
        } catch (error : any) {
            setError(error.response?.data?.message || "Registration failed");
        }finally{
            setLoading(false);
        }
    }, []);

    return <AuthContext.Provider value ={{user, token, loading, error, logout, login, register, isAuthenticated: !!user}}>{children}</AuthContext.Provider>

}


export const useAuth = (): AuthContextType=>{
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within AuthProvider")
    return context;
}


