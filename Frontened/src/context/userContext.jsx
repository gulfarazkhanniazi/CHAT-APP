import { useContext, useState } from "react";
import { AuthContext } from "./CreateContext";

export const UseAuthContext = () => {
    return useContext(AuthContext)
}

export const UserContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(localStorage.getItem("user") || null);
    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
