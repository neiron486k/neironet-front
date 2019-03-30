import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';
import Section from "../common/Section";
import { Typography } from "@material-ui/core";
// import yellow from "@material-ui/core/colors/yellow"

const styles = theme => ({
    root: {
        // backgroundColor: yellow[700],
        backgroundColor: theme.palette.grey[200],
        paddingBottom: theme.spacing.unit * 6,
        clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)',
        webkitClipPath: 'polygon(0 0, 100% 0, 100% 60%, 0% 100%)',
        [theme.breakpoints.down('sm')]: {
            clipPath: 'none',
            webkitClipPath: 'none',
            paddingBottom: 0,
        },
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