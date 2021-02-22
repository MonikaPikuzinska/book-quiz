import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_pl from "./translation/pl/common.json";
import common_en from "./translation/en/common.json";


    i18next.init({
        interpolation: { escapeValue: false },  // React already does escaping
        lng: 'en',                              // language to use
        resources: {
            en: {
                common: common_en               // 'common' is our custom namespace
            },
            pl: {
                common: common_pl
            },
        },
    });

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
