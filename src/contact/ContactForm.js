import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"

const styles = theme => ({
    root: {
    }
});

const ContactForm = ({classes}) => (
    <div className={classes.root}>
        <form>

        </form>
    </div>
);

ContactForm.propType = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactForm);