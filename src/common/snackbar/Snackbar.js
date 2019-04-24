import React from 'react';
import PropTypes from 'prop-types';
import { default as Snack } from '@material-ui/core/Snackbar';
import { closeSnackbar } from "./snackbarAction";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import withStyles from '@material-ui/core/styles/withStyles'
import SnackbarContent from "@material-ui/core/es/SnackbarContent/SnackbarContent";
import green from '@material-ui/core/colors/green'

const styles = theme => ({
    close: {},
    icon: {
        fontSize: 20,
    },
    default: {
        backgroundColor: theme.palette.primary.main
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
});

const Snackbar = ({ open, message, closeSnack, classes, variant }) => {
    return (
        <div>
            <Snack
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={closeSnack}
            >
                <SnackbarContent
                    className={classes[variant]}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar">{message}</span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={closeSnack}
                        >
                            <CloseIcon className={classes.icon} />
                        </IconButton>,
                    ]}
                />
            </Snack>
        </div>
    )
};

Snackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.any,
    closeSnack: PropTypes.func.isRequired,
    variant:  PropTypes.string
};

const mapStateToProps = state => ({
    open: state.snackbar.open,
    message: state.snackbar.message,
    variant: state.snackbar.variant
});
const mapDispatchToProps = dispatch => ({
    closeSnack: () => dispatch(closeSnackbar())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Snackbar))