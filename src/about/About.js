import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Section from "../common/Section";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    root: {
        // backgroundColor: theme.palette.primary[50],
        backgroundColor: theme.palette.primary[50],
        marginTop: -20,
        paddingBottom: theme.spacing.unit * 6,
        clipPath: 'polygon(0 10%, 60% 10%, 70% 0, 70% 10%, 100% 10%, 100% 60%, 0 100%)',
        webkitClipPath: 'polygon(0 10%, 60% 10%, 70% 0, 70% 10%, 100% 10%, 100% 60%, 0 100%)',
        [theme.breakpoints.down('sm')]: {
            clipPath: 'none',
            webkitClipPath: 'none',
            paddingBottom: 0,
        },
    },
    text: {
        marginTop: 15,
        color: theme.palette.grey[600]
    }
});

const About = ({ classes }) => (
        <div className={classes.root}>
            <Section>
                <Typography variant={"h5"} component={"h2"} align={"center"} className={classes.text}>
                    Мы - восококвалифицированная команда в области веб разработок, которая позаботиться обо всех сложных технических деталях,чтобы вы смогли сосредоточиться на важных для вас вещах.
                </Typography>
            </Section>
        </div>
);

export default withStyles(styles)(About)