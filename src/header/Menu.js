import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from 'react-scroll'
import { Button } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const styles = theme => ({
    root: {},
    active: {
        display: 'inline-block',
        borderBottom: '1px solid red',
        paddingBottom: 1
    }
});

const menuItems = [
    {
        id: 'home',
        label: 'home',
        offset: -60
    },
    {
        id: 'about',
        label: 'about',
        offset: -60
    },
    {
        id: 'work',
        label: 'works',
        offset: -60,
    },
    {
        id: 'service',
        label: 'services',
        offset: -60,
    },
    {
        id: 'review',
        label: 'reviews',
        offset: -60,
    },
    {
        id: 'contact',
        label: 'contacts',
        offset: -60,
    }
];

const Menu = ({classes}) => {
    return (
        <nav className={classes.root}>
            {menuItems.map((item, index) => (
                <Link
                    activeClass={classes.active}
                    to={item.id}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={500}
                    key={index}
                    variant={"Button"}
                >
                    <Button color="inherit">
                        <FormattedMessage
                            id={'menu.' + item.id}
                            defaultMessage={item.label}
                        />
                    </Button>
                </Link>
            ))}
        </nav>
    )
};

Menu.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu)