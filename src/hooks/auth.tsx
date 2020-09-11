import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface IUser {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
}

interface IAuthState {
    token: string;
    user: IUser;
}

interface ISignInCredentials {
    email: string,
    password: string;
}

interface IAuthContextData {
    user: IUser;
    signIn(credentials: ISignInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: IUser): void;
}

// Context
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

// Component
const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuthData] = useState<IAuthState>(() => {
        const token = localStorage.getItem('@UpCourse:token');
        const user = localStorage.getItem('@UpCourse:user');

        if(token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            return { token, user: JSON.parse(user) };
        }
        // localStorage.removeItem('@UpCourse:token');
        // localStorage.removeItem('@UpCourse:user');

        return {} as IAuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('/interno/login', {
            email,
            password,
        });

        const { token, user } = response.data;

        console.log(token)

        if(token) {
            localStorage.setItem('@UpCourse:token', token);
            localStorage.setItem('@UpCourse:user', JSON.stringify(user));

            api.defaults.headers.authorization = `Bearer ${token}`;

            setAuthData({ token, user });
        }
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@UpCourse:token');
        localStorage.removeItem('@UpCourse:user');

        setAuthData({} as IAuthState);
    }, []);

    const updateUser = useCallback((user: IUser) => {
        localStorage.setItem('@UpCourse:user', JSON.stringify(user));

        setAuthData({
            token: authData.token,
            user,
        });
    }, [setAuthData, authData.token]);

    return (
        <AuthContext.Provider value={{
            user: authData.user,
            signIn,
            signOut,
            updateUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook
function useAuth(): IAuthContextData {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used with an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth }
