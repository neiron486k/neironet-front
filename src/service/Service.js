import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { defaultStyles } from "../app/theme";

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 4,
        ...defaultStyles.container
    }
});

const Service = ({ classes }) => (
    <div className={classes.root}>
        <Typography variant={"h5"} paragraph={true} align={"center"}>Service</Typography>
        <Grid container={true} spacing={8}>
            <Grid item={true}>123123</Grid>
            <Grid item={true}>123123</Grid>
            <Grid item={true}>123123</Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(Service)