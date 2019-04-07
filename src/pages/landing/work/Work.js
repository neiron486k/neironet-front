import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Section from "../../../common/Section";
import Slider from "react-slick/lib";
import CardMedia from '@material-ui/core/CardMedia/index';
import Card from '@material-ui/core/Card/index';
import { Typography } from "@material-ui/core";

const slides = [
    {
        image: 'https://avatars.mds.yandex.net/get-pdb/49816/167fbefc-4bc6-4ca1-805c-69d08b200400/s1200',
        text: 'Cat',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-pdb/49816/167fbefc-4bc6-4ca1-805c-69d08b200400/s1200',
        text: 'Awesome cat',
    },
    {
        image: 'https://avatars.mds.yandex.net/get-pdb/49816/167fbefc-4bc6-4ca1-805c-69d08b200400/s1200',
        text: 'Pretty cat',
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
    },
    section: {
        paddingBottom: theme.spacing.unit * 4
    },
    wrapper: {
        padding: theme.spacing.unit / 2
    },
    cardMedia: {
        width: '100%',
        height: 250,
        position: 'relative'
    },
    content: {
        background: 'rgba(0, 0, 0, 1)',
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: theme.palette.common.white,
        clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
        webkitClipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
        padding: theme.spacing.unit
    },
});

const Work = ({ classes }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className={classes.root} id={"work"}>
            <Section title={'Work'} className={classes.section}>
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
                                        <div className={classes.content}>
                                            <Typography variant={"body1"} color={"inherit"} align={"center"}>
                                                {item.text}
                                            </Typography>
                                        </div>
                                    </CardMedia>
                                </Card>
                            </div>
                        )
                    })}
                </Slider>
            </Section>
        </div>
    )
};

Work.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Work)