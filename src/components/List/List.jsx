import react, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from './listStyle'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState(0)
    const places = [
        { name: 'Cool Place' },
        { name: 'Best Bear' },
        { name: 'Best Bear' },
        { name: 'Best Bear' },
        { name: 'Best Bear' },
        { name: 'Best Bear' },
        { name: 'Best Steak' }
    ]
    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Reataurant's,Hotels,& Attraction around you            
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attraction</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All Star</MenuItem>
                    <MenuItem value={5}>5-Star</MenuItem>
                    <MenuItem value={4}>4-Star</MenuItem>
                    <MenuItem value={3}>3-Star</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i)=>(
                    <Grid item key={i} xs ={12}>
                        <PlaceDetails place ={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
export default List;