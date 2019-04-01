import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"
import Section from "../common/Section";
import ContactForm from "./ContactForm";
import { Grid, Typography } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons'

// import yellow from "@material-ui/core/colors/yellow"

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary[50]
        // backgroundColor: yellow[800]
    }
});

const ListItemLink = props => <ListItem component="a" {...props} />;

const Contact = ({ classes }) => (
    <div className={classes.root} id={"contact"}>
        <Section title={"Contacts"}>
            <Grid container={true} spacing={8} justify={"center"}>
                <Grid item={true} sm={3}>
                    <List className={classes.root}>
                        <ListItemLink href={"tel:+79213594494"}>
                            <Avatar>
                                <PhoneIcon />
                            </Avatar>
                            <ListItemText primary="+7 (921) 359-44-94" />
                        </ListItemLink>
                        <ListItemLink href={"mailto:efsneiron@gmail.com"} target={"_blank"}>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                            <ListItemText primary="efsneiron@gmail.com" />
                        </ListItemLink>
                        <ListItem>
                            <Avatar>
                                <FontAwesomeIcon icon={faSkype} />
                            </Avatar>
                            <ListItemText primary="neiron486k" />
                        </ListItem>
                        <ListItem>
                            <Avatar>
                                <FontAwesomeIcon icon={faTelegram} />
                            </Avatar>
                            <ListItemText primary="@efsneiron" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item={true} sm={3}>
                    <Typography align={"center"} variant={"h6"}>Send request</Typography>
                    <ContactForm />
                </Grid>
            </Grid>
        </Section>
    </div>
);

Contact.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);