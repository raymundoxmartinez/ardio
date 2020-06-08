import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles'

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar className={classes.appBar} position="sticky">
                <Toolbar className={classes.toolBar}>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default NavBar
