import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Section from "../common/Section"

const styles = theme => ({
    root: {}
});

const Review = ({classes}) => (
    <div className={classes.root}>
        <Section title={"Review"}></Section>
    </div>
);

Review.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);