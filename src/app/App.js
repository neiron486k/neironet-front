import React, { Component } from 'react';
import Header from "../header/Header";
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from "../footer/Footer";
import Service from "../pages/landing/service/Service";
import Work from "../pages/landing/work/Work";
import About from "../pages/landing/about/About";
import withStyle from "@material-ui/core/styles/withStyles"
import Review from "../pages/landing/review/Review";
import Contact from "../pages/landing/contact/Contact";
import { IntlProvider } from "react-intl";
import messages from '../common/locale/messages'
import { connect } from "react-redux";

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        }
    },
});

class App extends Component {
    render() {
        const { lang } = this.props;
        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <div>
                    <CssBaseline />
                    <Header />
                    <About />
                    <Work />
                    <Service />
                    <Review />
                    <Contact />
                    <Footer />
                </div>
            </IntlProvider>
        );
    }
}

const mapStateToProps = state => ({ lang: state.locale.lang });

export default connect(mapStateToProps)(withStyle(styles)(App));
