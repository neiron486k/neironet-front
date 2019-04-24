import React from 'react';
import PropTypes from 'prop-types';
import { default as Snack } from '@material-ui/core/Snackbar';
import { closeSnackbar } from "./snackbarAction";
import { connect } from "react-redux";

const Snackbar = ({ open, message, closeSnack }) => {
    return (
        <Snack
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={closeSnack}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{message}</span>}
        />
    )
};

Snackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.any,
    closeSnack: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    open: state.snackbar.open,
    message: state.snackbar.message,
});
const mapDispatchToProps = dispatch => ({
    closeSnack: () => dispatch(closeSnackbar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar)