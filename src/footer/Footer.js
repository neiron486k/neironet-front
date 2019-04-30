import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white
    }
});

const Footer = ({ classes }) => (
    <footer className={classes.footer} color={"primary"}>
        <Toolbar variant={"dense"}>
            <Typography color={"inherit"} variant={"body1"}>
                © <FormattedMessage id={"logo.primary.text"} defaultMessage={"NEIRONET"} /> 2017 - 2019
            </Typography>
        </Toolbar>
    </footer>
);

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer)