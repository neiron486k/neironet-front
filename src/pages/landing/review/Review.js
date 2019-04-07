import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Section from "../../../common/Section"
import { Avatar, CardHeader, Typography } from "@material-ui/core";
import Divider from '@material-ui/core/Divider/index';

const styles = theme => ({
    root: {},
    avatar: {
        backgroundColor: theme.palette.grey[200],
        width: 100,
        height: 100,
    }
});

const reviews = [
    {
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        title: 'Shrimp and Chorizo Paella',
        subheader: 'September 14, 2016',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
];

const Review = ({ classes }) => (
    <div className={classes.root} id={"review"}>
        <Section title={"Review"}>
            {reviews.map((item, index) => (
                <div key={index}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        title={item.title}
                        subheader={
                            <div>
                                {item.subheader}
                                <Typography><cite>{item.description}</cite></Typography>
                            </div>
                        }
                    />
                    <Divider />
                </div>
            ))}
        </Section>
    </div>
);

Review.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);