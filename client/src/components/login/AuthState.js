// import React from "react";
import React, { useContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext";


const AuthState = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value = { isLoggedIn, setIsLoggedIn };

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthState;
