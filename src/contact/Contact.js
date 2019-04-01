import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"
import Section from "../common/Section";
import yellow from "@material-ui/core/colors/yellow"

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary[50]
        // backgroundColor: yellow[800]
    }
});

const Contact = ({classes}) => (
    <div className={classes.root}>
        <Section title={"Contacts"}>
        </Section>
    </div>
);

Contact.propType = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);