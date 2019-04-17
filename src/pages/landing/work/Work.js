import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Section from "../../../common/Section";
import Slider from "react-slick/lib";
import CardMedia from '@material-ui/core/CardMedia/index';
import Card from '@material-ui/core/Card/index';
import { Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { getWorks } from "./workOperation";
import { connect } from "react-redux";

const styles = theme => ({
    root: {},
    section: {
        paddingBottom: theme.spacing.unit * 4
    },
    wrapper: {
        padding: theme.spacing.unit / 2
    },
    cardMedia: {
        width: '100%',
        height: 250,
        position: 'relative',

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

const Work = ({ classes, works, fetchWorks, lang }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ],
    };

    useEffect(() => {
        fetchWorks();
    }, [lang]);

    return (
        <div className={classes.root} id={"work"}>
            <Section title={<FormattedMessage id={"label.work"} defaultMessage={"Work"} />} className={classes.section}>
                <Slider {...settings}>
                    {works.map((item, index) => {
                        return (
                            <div key={index} className={classes.wrapper}>
                                <Card>
                                    <CardMedia
                                        title={item.title}
                                        image={item.cover}
                                        className={classes.cardMedia}
                                    >
                                        <div className={classes.content}>
                                            <Typography variant={"body1"} color={"inherit"} align={"center"}>
                                                {item.title}
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
    classes: PropTypes.object.isRequired,
    fetchWorks: PropTypes.func.isRequired,
    works: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    lang: state.locale.lang,
    works: state.work.works
});
const mapDispatchToProps = dispatch => ({
    fetchWorks: () => dispatch(getWorks())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Work))