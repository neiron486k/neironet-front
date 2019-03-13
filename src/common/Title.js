import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        margin: theme.spacing.unit * 2
    },
    divider: {
        height: 2,
        width: 200,
        margin: `${theme.spacing.unit}px auto ${theme.spacing.unit * 2}px auto`
    }
});

const Title = ({classes, title}) => (
    <div className={classes.root}>
        <Typography variant={"h4"} align={"center"}>{title}</Typography>
        <Divider className={classes.divider} />
    </div>
);

Title.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string.isRequired
};

export default withStyles(styles)(Title)