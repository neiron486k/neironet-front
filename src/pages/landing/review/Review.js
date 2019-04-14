import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Section from "../../../common/Section"
import { Avatar, CardHeader, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider/index';
import { FormattedMessage } from "react-intl";
import { getReviewData } from "./reviewOperation";
import { connect } from "react-redux";

const styles = theme => ({
    root: {},
    avatar: {
        backgroundColor: theme.palette.grey[200],
        width: 100,
        height: 100,
    }
});

const Review = ({ classes, fetchReviews, reviews, lang }) => {
    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div className={classes.root} id={"review"}>
            <Section title={<FormattedMessage id={"label.review"} defaultMessage={"Review"} />}>
                {reviews.map((item, index) => {
                        let username = item.user.profile.firstName + ' ' + item.user.profile.lastName;
                        const options = { hour: 'numeric', minute: 'numeric', month: 'long', year: 'numeric', day: 'numeric'};
                        let date = (new Date(item.createdAt)).toLocaleTimeString(lang, options);

                        return (
                            <div key={index}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            aria-label="avatar"
                                            className={classes.avatar}
                                            alt={item.user.profile.firstName}
                                            src={item.user.profile.avatar}
                                        />
                                    }
                                    title={username}
                                    subheader={
                                        <div>
                                            {date}
                                            <Typography><cite>{item.content}</cite></Typography>
                                        </div>
                                    }
                                />
                                <Divider />
                            </div>
                        )
                    }
                )}
            </Section>
        </div>
    )
};

Review.propTypes = {
    classes: PropTypes.object.isRequired,
    fetchReviews: PropTypes.func.isRequired,
    reviews: PropTypes.array.isRequired,
    lang: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    reviews: state.review.reviews,
    lang: state.locale.lang
});

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch(getReviewData())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Review));