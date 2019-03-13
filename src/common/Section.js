import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import {defaultStyles} from "../app/theme";
import Title from "./Title";

const styles = theme => ({
    container: {
        ...defaultStyles.container
    }
});

const Section = ({classes, title, children }) => (
    <section className={classes.container}>
        {title && (
            <Title title={title}/>
        )}
        {children}
    </section>
);

Section.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string
};

export default withStyles(styles)(Section)