import React, { Component } from 'react';
import Header from "../header/Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"
import Footer from "../footer/Footer";
import Service from "../service/Service";
import Work from "../work/Work";
import About from "../about/About";
import withStyle from "@material-ui/core/styles/withStyles"
import Review from "../Review/Review";
import Contact from "../contact/Contact";

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        }
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <About />
                <Work />
                <Service />
                <Review />
                <Contact />
                <Footer />
            </MuiThemeProvider>
        );
    }
}

export default withStyle(styles)(App);
