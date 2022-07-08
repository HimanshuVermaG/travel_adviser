import react from "react";
import GooglMapReact from "google-map-react";
import { Typography, Paper, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab"

import useStyles from "./mapStyle"

const Map = ()=>{
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const cordinates = {lat:0,lng:0}; 
    return(
        <h1 className={classes.mapContainer}>
            <GooglMapReact bootstrapURLKeys={{key:'AIzaSyDs75Xri-kOr3BtP4bzDmQ0rSUJkBk15ss'}}
            defaultCenter={cordinates}
            center={cordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}
            >
            </GooglMapReact>
        </h1>
    );
}
export default Map;