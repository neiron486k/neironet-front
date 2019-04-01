import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';
import Section from "../common/Section";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary[50],
    },
});

const About = ({ classes }) => (
    <div className={classes.root}>
        <Section>
            <Typography variant={"h6"} component={"h2"} align={"center"}>
                Мы - восококвалифицированная команда в области веб разработок, которая позаботиться обо всех сложных
                технических деталях, чтобы вы смогли сосредоточиться на важных для вас вещах.
            </Typography>
        </Section>
    </div>
);

About.propTypes = {
    classes:PropTypes.object.isRequired,
};

export default withStyles(styles)(About)