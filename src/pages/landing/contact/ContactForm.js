import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles"
import { Field, reduxForm } from 'redux-form'
import renderTextField from '../../../utils/renderTextField';
import { Button } from "@material-ui/core";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { requestToFeedback } from "./contactOperation";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
});

let ContactForm = ({ classes, handleSubmit, intl, sendRequest }) => {
    return (
        <form className={classes.root} onSubmit={handleSubmit(sendRequest)} noValidate={true}>
            <Field
                name="name"
                label={intl.formatMessage({ id: 'label.name', defaultMessage: 'name' })}
                component={renderTextField}
                type="text"
                variant={"outlined"}
                margin="dense"
                required={true}
            />
            <Field
                name="phone"
                label={intl.formatMessage({ id: 'label.phone', defaultMessage: 'phone' })}
                component={renderTextField}
                type="tel"
                variant={"outlined"}
                margin="dense"
                required={true}
            />
            <Field
                name="content"
                required={true}
                label={intl.formatMessage({ id: 'label.description', defaultMessage: 'description' })}
                component={renderTextField}
                type="text"
                variant={"outlined"}
                margin="dense"
                rows={5}
                multiline={true}
            />
            <Button color={"primary"} variant={"contained"} type={"submit"}>
                {intl.formatMessage({ id: 'label.send', defaultMessage: 'Send' })}
            </Button>
        </form>
    )
};

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    sendRequest: PropTypes.func.isRequired
};

ContactForm = reduxForm({
    form: 'contactForm'
})(ContactForm);


const mapStateToProps = state => ({
   lang: state.locale.lang
});

const mapDispatchToProps = dispatch => ({
    sendRequest: (values) => dispatch(requestToFeedback(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(withStyles(styles)(ContactForm)));