import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia"
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/es/Typography/Typography";
import { Button } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone"
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
    root: {
        width: '100%',
        height: 500
    },
    appBar: {
        background: 'rgba(0, 0, 0, .7)'
    },
    brandBar: {},
    navBar: {},
    textBar: {
        flexGrow: 1,
        textAlign: 'center'
    },
    icon: {
        marginRight: 10,
    },
    button: {
        fontSize: '1.2em'
    }
});

const Header = ({ classes }) => (
    <div>
        <CardMedia
            image={'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg'}
            className={classes.root}
        >
            <AppBar position={"static"} color={"primary"} elevation={0} className={classes.appBar}>
                <Toolbar>
                    <div className={classes.brandBar}>
                        <Typography variant={"h6"} color="inherit">
                            PrimeAid
                        </Typography>
                    </div>
                    <div className={classes.textBar}>
                        <Button size="large" className={classes.button} color={"inherit"}>
                            <PhoneIcon className={classes.icon} />
                            +7 (921) 359-44-94
                        </Button>
                    </div>
                    <nav className={classes.navBar}>
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