import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { Button } from "@material-ui/core";
import { setLocale } from "../common/locale/localeOperation";
import { connect } from "react-redux";

const styles = theme => ({
   root: {
       color: theme.palette.common.white
   }
});

const Lang = ({classes, setLang}) => {
    return (
        <div className={classes.root}>
            <Button color={"inherit"} onClick={() => setLang('ru')}>Ru</Button>
            <Button color={"inherit"} onClick={() => setLang('en')}>En</Button>
        </div>
    )
};

Lang.propTypes = {
    classes: PropTypes.object.isRequired,
    setLang: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispath => ({
    setLang: lang => dispath(setLocale(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Lang));