import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import theme from './styles/theme';

// import { Provider as ReduxProvider } from 'react-redux';
// import store from './store';

import AppProvider from './hooks';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <MaterialThemeProvider theme={theme}>
                    <AppProvider>
                        <Routes />
                    </AppProvider>
                </MaterialThemeProvider>
            </BrowserRouter>

            <GlobalStyle />
        </>
    );
};

export default App;
