import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const allContent = useFirebase()
    return (
        <AuthContext.Provider value={allContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;