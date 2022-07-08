import react from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar,Toolbar,Typography,InputBase,Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from './headerStyle'

const Header = ()=>{
    const classes = useStyles(); 

    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant='h5'>
                    Travel Advisor
                </Typography>
                <Box display='flex'>
                    <Typography className={classes.title} variant='h6'>
                        Explore new places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                        </div>
                        <InputBase placeholder='Search...' classes={{root:classes.inputRoot,input:classes.inputInput}} />
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Header;