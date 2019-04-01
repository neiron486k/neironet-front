import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"
import Section from "../common/Section";
import ContactForm from "./ContactForm";
import { Grid, Typography } from '@material-ui/core'

// import yellow from "@material-ui/core/colors/yellow"

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary[50]
        // backgroundColor: yellow[800]
    }
});

const Contact = ({ classes }) => (
    <div className={classes.root}>
        <Section title={"Contacts"}>
            <Grid container={true} spacing={8}>
                <Grid item={true} sm={4}></Grid>
                <Grid item={true} sm={4}></Grid>
                <Grid item={true} sm={4}>
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