import { createContext, useContext, useState } from "react";

type AuthContextType = Record<string, unknown>;

const AuthContext = createContext<AuthContextType | null>(null)
function AuthProvider({children} : {children: React.ReactNode}) {
    const [user, setUser] = useState(null)
    const value = { user, setUser }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
function useAuth(){
    const context = useContext(AuthContext)
    if(!context) throw new Error("useAuth must be used within an AuthProvider")
    return context
}
export { AuthProvider, useAuth }