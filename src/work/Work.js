import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Section from "../common/Section";
import Slider from "react-slick";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";

const slides = [
    {
        image: 'https://avatars.mds.yandex.net/get-pdb/49816/167fbefc-4bc6-4ca1-805c-69d08b200400/s1200',
        text: 'Cat',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-pdb/49816/167fbefc-4bc6-4ca1-805c-69d08b200400/s1200',
        text: 'Cat',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-pdb/49816/167fbefc-4bc6-4ca1-805c-69d08b200400/s1200',
        text: 'Cat',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-pdb/49816/167fbefc-4bc6-4ca1-805c-69d08b200400/s1200',
        text: 'Cat',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-pdb/49816/167fbefc-4bc6-4ca1-805c-69d08b200400/s1200',
        text: 'Cat',
    },
];

const styles = theme => ({
    root: {
        // background: theme.palette.primary[50]
    },
    wrapper: {
        padding: theme.spacing.unit
    },
    cardMedia: {
        width: '100%',
        height: 250,
        position: 'relative'
    },
    cardContent: {
        background: 'rgba(0, 0, 0, .7)',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        color: theme.palette.common.white
    }
});

const Work = ({ classes }) => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className={classes.root}>
            <Section title={'Work'}>
                <Slider {...settings}>
                    {slides.map((item, index) => {
                        return (
                            <div key={index} className={classes.wrapper}>
                                <Card>
                                    <CardMedia
                                        title={'image'}
                                        image={item.image}
                                        className={classes.cardMedia}
                                    >
                                        <CardContent className={classes.cardContent}>
                                            <Typography variant={"body1"} color={"inherit"} align={"center"}>
                                                {item.text}
                                            </Typography>
                                        </CardContent>
                                    </CardMedia>
                                </Card>
                            </div>
                        )
                    })}
                </Slider>
            </Section>
        </div>
    )
}

export default withStyles(styles)(Work)