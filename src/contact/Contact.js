import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"
import Section from "../common/Section";

const styles = theme => ({
    root: {}
});

const Contact = ({classes}) => (
    <div className={classes.root}>
        <Section title={"Contacts"}></Section>
    </div>
);

Contact.propType = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);