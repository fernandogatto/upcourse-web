import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './styles/theme';

// import { Provider } from 'react-redux';
// import store from './store';

import AppProvider from './hooks';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <AppProvider>
                        <Routes />
                    </AppProvider>
                </ThemeProvider>
            </BrowserRouter>

            <GlobalStyle />
        </>
    );
};

export default App;
