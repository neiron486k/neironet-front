import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../utils/renderTextField';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
});

let ContactForm = ({ classes }) => (
    <form className={classes.root}>
        <Field
            name="name"
            label={"name"}
            component={renderTextField}
            type="text"
            variant={"outlined"}
            margin="dense"
            required={true}
        />
        <Field
            name="phone"
            label={"phone"}
            component={renderTextField}
            type="text"
            variant={"outlined"}
            margin="dense"
            required={true}
        />
        <Field
            name="description"
            required={true}
            label={"description"}
            component={renderTextField}
            type="text"
            variant={"outlined"}
            margin="dense"
            rows={5}
            multiline={true}
        />
    </form>
);

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired
};

ContactForm = reduxForm({
    form: 'contactForm'
})(ContactForm);


export default withStyles(styles)(ContactForm);