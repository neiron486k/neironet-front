import React, { useState } from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from 'react-scroll'
import { Button } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const Menu = ({ classes, width }) => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open)
    };

    return (
        <nav className={classes.root}>
            {isWidthUp('md', width) ? (
                <div>
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
                                    id={'label.' + item.id}
                                    defaultMessage={item.label}
                                />
                            </Button>
                        </Link>
                    ))}
                </div>
            ) : (
                <div>
                    <IconButton color="inherit" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        open={open}
                        onClose={toggleDrawer}
                        anchor={"top"}
                    >
                        <List>
                            {menuItems.map((item, index) =>
                                <Link
                                    to={item.id}
                                    spy={true}
                                    hashSpy={true}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={500}
                                    key={index}
                                    variant={"Button"}
                                >
                                    <ListItem button={true} key={index}>
                                        <ListItemText
                                            primary={
                                                <FormattedMessage
                                                    id={'label.' + item.id}
                                                    defaultMessage={item.label}
                                                />
                                            }
                                            onClick={toggleDrawer}
                                        />
                                    </ListItem>
                                </Link>
                            )}
                        </List>
                    </Drawer>
                </div>
            )
            }
        </nav>
    )
};

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(Menu))