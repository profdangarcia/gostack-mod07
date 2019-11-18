import React from 'react';
// antes da utilização de navegação pelo Redux Saga
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import Routes from './routes';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
