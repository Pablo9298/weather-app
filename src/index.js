import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';

// zdesh mi berem object DOM (document) v kotorom vsja struktura nashego index.html iz nego 
// vqbiraem element div u kotorogo id = root i oborachivaem ego v ReactDOM

// ReactDOM sozdaet virtualnij DOM na servere i v nego renderit ili
// otrisovivaet vse 4to nahoditsja v nashem React prilozhenii

// Render toestj otrisovka eto procedura perehoda s React komponenta v 4istij JS i HTML.

// Provider komponent eto vspomogatelnij komponent ot react-redux dlja raboti s redux state.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
