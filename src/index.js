import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_pl from "./translation/pl/common.json";
import common_en from "./translation/en/common.json";
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

i18next.init({
    interpolation: { escapeValue: false },  
    lng: 'en',                              
    resources: {
        en: {
            common: common_en               
        },
        pl: {
            common: common_pl
        },
    },
});

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <App/>
            </I18nextProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
