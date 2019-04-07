import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { setLocale } from "../common/locale/localeOperation";
import { connect } from "react-redux";
import ru from "./images/ru.png"
import en from "./images/en.png"

const styles = theme => ({
   root: {
       color: theme.palette.common.white,
       margin: theme.spacing.unit,
       cursor: 'pointer'
   }
});

const Lang = ({classes, setLang}) => {
    return (
        <div className={classes.root}>
            <img src={ru} alt="ru" onClick={() => setLang('ru')} />
            <img src={en} alt="en" onClick={() => setLang('en')} />
        </div>
    )
};

Lang.propTypes = {
    classes: PropTypes.object.isRequired,
    setLang: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    setLang: lang => dispatch(setLocale(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Lang));