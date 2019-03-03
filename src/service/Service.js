import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { defaultStyles } from "../app/theme";
import CardMedia from "@material-ui/core/CardMedia"
import Card from "@material-ui/core/Card";

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 4,
        ...defaultStyles.container
    },
    card: {
        height: 400,
        color: theme.palette.common.white
    },
    cardMedia: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    cardMediaContent: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "rgba(0, 0, 0, .7)",
        transition: theme.transitions.create(
            ['background'],
            { duration: theme.transitions.duration.standard }
        ),
        '&:hover': {
            background: "rgba(0, 0, 0, .8)",
        },
        padding: theme.spacing.unit * 2
    },
    titleContent: {
        marginTop: theme.spacing.unit * 2
    }
});

const Service = ({ classes }) => (
    <div className={classes.root}>
        <Typography variant={"h4"} paragraph={true} align={"center"}>Service</Typography>
        <Grid container={true} spacing={8}>
            <Grid item={true} xs={12} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        image={'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg'}
                        className={classes.cardMedia}
                    >
                        <div className={classes.cardMediaContent}>
                            <Typography
                                align={"center"}
                                color={"inherit"}
                                variant={"h5"}
                                paragraph={true}
                                className={classes.titleContent}
                            >
                                Development
                            </Typography>
                            <Typography variant={"body2"} color={"inherit"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </div>
                    </CardMedia>
                </Card>
            </Grid>
            <Grid item={true} xs={12} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        image={'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg'}
                        className={classes.cardMedia}
                    >
                        <div className={classes.cardMediaContent}>
                            <Typography
                                align={"center"}
                                color={"inherit"}
                                variant={"h5"}
                                paragraph={true}
                                className={classes.titleContent}
                            >
                                Administration
                            </Typography>
                            <Typography variant={"body2"} color={"inherit"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </div>
                    </CardMedia>
                </Card>
            </Grid>
            <Grid item={true} xs={12} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        image={'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg'}
                        className={classes.cardMedia}
                    >
                        <div className={classes.cardMediaContent}>
                            <Typography
                                align={"center"}
                                color={"inherit"}
                                variant={"h5"}
                                paragraph={true}
                                className={classes.titleContent}
                            >
                                Support
                            </Typography>
                            <Typography variant={"body2"} color={"inherit"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </div>
                    </CardMedia>
                </Card>
            </Grid>
            <Grid item={true} xs={12} md={12}>
                <Card className={classes.card}>
                    <CardMedia
                        image={'https://www.financialsamurai.com/wp-content/uploads/2018/08/management-consulting-pay.jpg'}
                        className={classes.cardMedia}
                    >
                        <div className={classes.cardMediaContent}>
                            <Typography
                                align={"center"}
                                color={"inherit"}
                                variant={"h5"}
                                paragraph={true}
                                className={classes.titleContent}
                            >
                                SEO
                            </Typography>
                            <Typography variant={"body2"} color={"inherit"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </div>
                    </CardMedia>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(Service)