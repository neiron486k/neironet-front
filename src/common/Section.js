import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from 'prop-types';
import {defaultStyles} from "../app/theme";
import Title from "./Title";
import classnames from 'classnames';

const styles = theme => ({
    container: {
        ...defaultStyles.container
    }
});

const Section = ({classes, title, children, className }) => (
    <section className={classnames(classes.container, className)}>
        {title && (
            <Title title={title}/>
        )}
        {children}
    </section>
);

Section.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string
};

export default withStyles(styles)(Section)