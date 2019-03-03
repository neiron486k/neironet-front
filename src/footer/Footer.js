import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles"
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from "@material-ui/core";

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white
    }
});

const Footer = ({ classes }) => (
    <footer className={classes.footer} color={"primary"}>
        <Toolbar variant={"dense"}>
            <Typography color={"inherit"} variant={"body1"}>© PrimeAid 2019</Typography>
        </Toolbar>
    </footer>
);

export default withStyles(styles)(Footer)