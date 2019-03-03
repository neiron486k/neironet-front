import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia"
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/es/Typography/Typography";
import { Button } from "@material-ui/core";

const styles = theme => ({
    root: {
        width: '100%',
        height: 500
    },
    nav: {
        boxShadow: 0
    },
    appBar: {
        opacity: 0.8,
        backgroundColor: "#000"
    },
    grow: {
        flexGrow: 1
    }
});

const Header = ({classes}) => (
    <div>
        <CardMedia
            image={'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg'}
            className={classes.root}
        >
            <AppBar position={"static"} color={"primary"} elevation={0} className={classes.appBar}>
                <Toolbar>
                    <Typography variant={"h6"} color="inherit" className={classes.grow}>
                        PrimeAid
                    </Typography>
                    <nav>
                        <Button color="inherit">Service</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Contacts</Button>
                    </nav>
                </Toolbar>
            </AppBar>
        </CardMedia>
    </div>
);

export default withStyles(styles)(Header)