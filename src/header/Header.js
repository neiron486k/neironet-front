import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia"
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/es/Typography/Typography";
import { Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone"
import IconButton from "@material-ui/core/IconButton";
import background from "./images/background.jpg";
import logo from "./images/logo.png";

const styles = theme => ({
    root: {
        width: '100%',
        height: 500
    },
    appBar: {
        display: 'flex',
        background: 'rgba(0, 0, 0, .7)'
    },
    brand: {
        flexGrow: 1,
        marginLeft: theme.spacing.unit * 2
    },
    logo: {
        width: 50,
        height: 50
    }
});

const Header = ({ classes }) => (
    <CardMedia
        image={background}
        className={classes.root}
    >
        <AppBar position={"static"} elevation={0} className={classes.appBar}>
            <Toolbar>
                <CardMedia
                    image={logo}
                    className={classes.logo}
                />
                <div className={classes.brand}>
                    <Typography variant={"h6"} color="inherit">PrimeAid</Typography>
                    <Typography variant={"caption"} color="inherit">Return result to profit</Typography>
                </div>
                <nav className={classes.nav}>
                    <Button color="inherit">Service</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contacts</Button>
                </nav>
            </Toolbar>
        </AppBar>
    </CardMedia>
);

export default withStyles(styles)(Header)