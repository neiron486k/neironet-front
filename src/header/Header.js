import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia"
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/es/Typography/Typography";
import { Button } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import background from "./images/background.jpg";
import logo from "./images/logo.png";
import DoneIcon from '@material-ui/icons/Done';
import green from '@material-ui/core/colors/green'
import Section from "../common/Section";

const styles = theme => ({
    root: {
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    },
    dotted: {
        padding: '2.25em 1.6875em',
        backgroundImage: 'repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%)',
        backgroundSize: '3px 3px',
        width: '100%'
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
    },
    textPrimary: {
        fontSize: '2em',
        fontWeight: 'bold',
        color: theme.palette.common.white
    },
    textSecondary: {
        color: theme.palette.common.white
    },
    icon: {
        color: green['A700'],
    },
    container: {
        marginTop: 50
    },
    list: {
        background: 'rgba(0, 0, 0, .6)',
        display: 'inline-block',
        borderRadius: theme.shape.borderRadius,
    }
});

const Header = ({ classes }) => {
    return (
        <CardMedia
            image={background}
            className={classes.root}
            title={'background'}
        >
            <div className={classes.dotted}>
                <AppBar position={'fixed'} elevation={0} className={classes.appBar}>
                    <Toolbar variant={"regular"}>
                        <CardMedia
                            image={logo}
                            className={classes.logo}
                            title={'logo'}
                        />
                        <div className={classes.brand}>
                            <Typography variant={"h6"} color="inherit">PrimeAid</Typography>
                            <Typography variant={"caption"} color="inherit">Return result to profit</Typography>
                        </div>
                        <nav className={classes.nav}>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Works</Button>
                            <Button color="inherit">Services</Button>
                            <Button color="inherit">Reviews</Button>
                            <Button color="inherit">Contacts</Button>
                        </nav>
                    </Toolbar>
                </AppBar>
                <Section className={classes.container}>
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <DoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: classes.textPrimary,
                                    secondary: classes.textSecondary,
                                }}
                                primary="Developing"
                                secondary={"php, python, lua, nodejs, js..."}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <DoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Administration"
                                secondary={"unix, linux, windows, networks..."}
                                classes={{
                                    primary: classes.textPrimary,
                                    secondary: classes.textSecondary,
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <DoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Consultation"
                                secondary={"technologies, storing, etc..."}
                                classes={{
                                    primary: classes.textPrimary,
                                    secondary: classes.textSecondary,
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <DoneIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary="Guarantee"
                                secondary={"quality, times"}
                                classes={{
                                    primary: classes.textPrimary,
                                    secondary: classes.textSecondary,
                                }}
                            />
                        </ListItem>
                    </List>
                </Section>
            </div>
        </CardMedia>
    )
};

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header)