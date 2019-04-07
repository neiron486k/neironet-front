import React from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { CardContent, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/index";
import CardMedia from "@material-ui/core/CardMedia/index"
import Card from "@material-ui/core/Card/index";
import Section from "../../../common/Section";
import { FormattedMessage } from "react-intl";

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary[50],
    },
    card: {
        color: theme.palette.common.white,
        height: '100%'
    },
    media: {
        height: '100%'
    },
    content: {
        height: '100%',
        background: 'rgba(0, 0, 0, .6)',
        transition: theme.transitions.create(
            ['background'],
            { duration: theme.transitions.duration.standard }
        ),
        '&:hover': {
            background: 'rgba(0, 0, 0, .7)',
        }
    }
});

const services = [
    {
        image: 'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg',
        title: 'Development',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n' +
            '                                    Ipsum\n' +
            '                                    has been the industry\'s standard dummy text ever since the 1500s, when an unknown\n' +
            '                                    printer took a galley of type and scrambled it to make a type specimen book. It has\n' +
            '                                    survived not only five centuries, but also the leap into electronic typesetting,\n' +
            '                                    remaining essentially unchanged. It was popularised in the 1960s with the release of\n' +
            '                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n' +
            '                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        image: 'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg',
        title: 'Development',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        image: 'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg',
        title: 'Development',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
        image: 'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg',
        title: 'Development',
        shortDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
];

const Service = ({ classes }) => (
    <div className={classes.root} id={"service"}>
        <Section title={<FormattedMessage id={"label.service"} defaultMessage={"Service"} />} className={classes.section}>
            <Grid container={true} spacing={8} justify={"center"} alignItems={"stretch"}>
                {services.map((item, index) => (
                    <Grid item={true} xs={12} md={3} key={index}>
                        <Card className={classes.card}>
                            <CardMedia
                                image={item.image}
                                className={classes.media}
                            >
                                <CardContent className={classes.content}>
                                    <Typography
                                        align={"center"}
                                        color={"inherit"}
                                        variant={"h5"}
                                        gutterBottom={true}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant={"body2"} color={"inherit"}>
                                        {item.shortDescription}
                                    </Typography>
                                </CardContent>
                            </CardMedia>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    </div>
);

Service.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Service)