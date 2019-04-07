import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles';
import Section from "../../../common/Section";
import { Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary[50],
    },
});

const About = ({ classes }) => (
    <div className={classes.root} id={"about"}>
        <Section>
            <Typography variant={"h6"} component={"h2"} align={"center"}>
               <FormattedMessage id={"about.text"} />
            </Typography>
        </Section>
    </div>
);

About.propTypes = {
    classes:PropTypes.object.isRequired,
};

export default withStyles(styles)(About)