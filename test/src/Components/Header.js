import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
    root: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: "#b2dfdb",
        
    }
};


function Header(props) {
    const { classes } = props
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.AppBar}>
                    <Toolbar>

                    </Toolbar>
                </AppBar>

            </div>
        );
    }

    Header.PropTypes = {
        classes: PropTypes.object.isRequired,
    }


export default withStyles(styles)(Header);