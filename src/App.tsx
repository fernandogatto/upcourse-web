import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { Provider } from 'react-redux';
// import store from './store';

import AppProvider from './hooks';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <AppProvider>
                    <Routes />
                </AppProvider>
            </BrowserRouter>

            <GlobalStyle />
        </>
    );
};

export default App;