import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { CardContent, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/index";
import CardMedia from "@material-ui/core/CardMedia/index"
import Card from "@material-ui/core/Card/index";
import Section from "../../../common/Section";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getServices } from "./serviceOperation";

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

const Service = ({ classes, services, fetchServices }) => {
    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div className={classes.root} id={"service"}>
            <Section title={<FormattedMessage id={"label.service"} defaultMessage={"Service"} />}>
                <Grid container={true} spacing={8} justify={"center"} alignItems={"stretch"}>
                    {services.map((item, index) => (
                        <Grid item={true} xs={12} md={3} key={index}>
                            <Card className={classes.card}>
                                <CardMedia
                                    image={item.cover}
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
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardMedia>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Section>
        </div>
    )
};

Service.propTypes = {
    classes: PropTypes.object.isRequired,
    services: PropTypes.array.isRequired,
    fetchServices: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    'services': state.service.services
});
const mapDispatchToProps = dispatch => ({
    fetchServices: () => dispatch(getServices())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Service))