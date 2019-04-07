import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import 'typeface-oxygen';
import 'typeface-play';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import { Provider } from "react-redux"
import store from "./app/store";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./app/theme"
import { setLocale, detectLocale } from "./common/locale/localeOperation";
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
addLocaleData([...en, ...ru]);

const lang = detectLocale();
store.dispatch(setLocale(lang));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
