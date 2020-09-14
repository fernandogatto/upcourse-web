import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const TOKEN_PREFIX = '@UpCourse:token';
const TOKEN_TYPE_PREFIX = '@UpCourse:tokentype';
const USER_PREFIX = '@UpCourse:user';

interface IUser {
    id: string;
    name: string;
    email: string;
    type: string;
    avatar_url: string;
}

interface IAuthState {
    access_token: string;
    token_type: string;
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

// Verifica se existe token para fazer o login
const checkToken = () => localStorage.getItem(TOKEN_PREFIX) !== null;

// Context
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

// Component
const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuthData] = useState<IAuthState>(() => {
        const access_token = localStorage.getItem(TOKEN_PREFIX);
        const token_type = localStorage.getItem(TOKEN_TYPE_PREFIX);
        const user = localStorage.getItem(USER_PREFIX);

        if(token_type && access_token && user) {
            api.defaults.headers.authorization = `${token_type} ${access_token}`;

            return { access_token, token_type, user: JSON.parse(user) };
        }

        return {} as IAuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post('/interno/login', {
            email,
            password,
        });

        const { access_token, token_type, user } = response.data;

        // Só seta token e user se for diferente de undefined
        if (typeof(access_token) !== 'undefined' &&
            typeof(token_type) !== 'undefined' &&
            typeof(user) !== 'undefined'
        ) {
            localStorage.setItem(TOKEN_PREFIX, access_token);
            localStorage.setItem(TOKEN_TYPE_PREFIX, token_type);
			localStorage.setItem(USER_PREFIX, JSON.stringify(user));

            api.defaults.headers.authorization = `${token_type} ${access_token}`;

            setAuthData({ access_token, token_type, user });
        }
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem(TOKEN_PREFIX);
		localStorage.removeItem(TOKEN_TYPE_PREFIX);
		localStorage.removeItem(USER_PREFIX);

        setAuthData({} as IAuthState);
    }, []);

    const updateUser = useCallback((user: IUser) => {
        localStorage.setItem(USER_PREFIX, JSON.stringify(user));

        setAuthData({
            access_token: authData.access_token,
            token_type: authData.token_type,
            user,
        });
    }, [setAuthData, authData.access_token, authData.token_type]);

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

export { AuthProvider, useAuth, checkToken }
