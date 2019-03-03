import React, { Component } from 'react';
import Header from "../header/Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"
import Footer from "../footer/Footer";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Footer />
            </MuiThemeProvider>
        );
    }
}

export default App;
